import fs from 'fs'
import { kebabCase } from 'lodash'
import { Readable } from 'stream'
import { finished } from 'stream/promises'

// 1. automate it to handle every single directory for all the different packages we just deleted
//   1a. handle tag definitions
// 2. fetch all the images for all the entries and store them
;(async () => {
	const DATA_PACKS = [
		'angular',
		'deno',
		'graphql',
		'nodejs',
		'qwik',
		'react',
		'solidjs',
		'svelte',
		'vue',
	]
	const COLLECTION_TYPE = {
		blogs: {
			collection: 'blogs',
			tags: 'blogTags',
			fileNameGn: (item) => kebabCase(`${item.title.toLowerCase()}`),
		},
		books: {
			collection: 'books',
			tags: 'bookTags',
			fileNameGn: (item) =>
				kebabCase(
					`${item.title.toLowerCase()} ${item.authors.join(' ').toLowerCase()}`,
				),
		},
		communities: {
			collection: 'communities',
			tags: 'communityTags',
			fileNameGn: (item) => kebabCase(`${item.name.toLowerCase()}`),
		},
		courses: {
			collection: 'courses',
			tags: 'courseTags',
			fileNameGn: (item) =>
				kebabCase(`${item.title.toLowerCase()} ${item.author.toLowerCase()}`),
		},
		libraries: {
			collection: 'libraries',
			tags: null,
			fileNameGn: (item) => kebabCase(`${item.name.toLowerCase()}`),
		},
		podcasts: {
			collection: 'podcasts',
			tags: 'podcastTags',
			fileNameGn: (item) => kebabCase(`${item.title.toLowerCase()}`),
		},
		tools: {
			collection: 'tools',
			tags: 'toolTags',
			fileNameGn: (item) => kebabCase(`${item.name.toLowerCase()}`),
		},
	}
	const allTags = {}

	Object.keys(COLLECTION_TYPE).forEach((type) => {
		DATA_PACKS.forEach((pack) => {
			fs.mkdirSync(`packages/site/src/content/${pack}-${type}`, {
				recursive: true,
			})
			fs.mkdirSync(`packages/site/src/content/${pack}-${type}/assets`, {
				recursive: true,
			})
		})
	})

	await Promise.all(
		DATA_PACKS.map(async (pack) => {
			await Promise.all(
				Object.keys(COLLECTION_TYPE).map(async (type) => {
					const data = await import(
						`./packages/site/src/data/${pack}/${type}.ts`
					)
					const collection = data[COLLECTION_TYPE[type].collection]
					const tags = data[COLLECTION_TYPE[type].tags] ?? []

					if (allTags[pack] === undefined) {
						allTags[pack] = {}
					}
					allTags[pack][type] = tags

					collection.forEach(async (item) => {
						try {
							const pathName = `packages/site/src/content/${pack}-${type}`
							const fileName = COLLECTION_TYPE[type].fileNameGn(item)
							fs.writeFileSync(
								`${pathName}/${fileName}.json`,
								JSON.stringify({
									...item,
									image: await storeImageAndGetPath(
										item.image,
										pathName,
										fileName,
									),
								}),
							)
						} catch (err) {
							console.error(err)
						}
					})
				}),
			)
		}),
	)
})()

async function storeImageAndGetPath(
	srcImagePath: string,
	destPath: string,
	destFileName: string,
) {
	// if image is base64 encoded
	if (srcImagePath.startsWith('data:image')) {
		const base64Data = srcImagePath.replace(/^data:image\/\w+;base64,/, '')
		const buffer = Buffer.from(base64Data, 'base64')
		const filePath = `${destPath}/assets/${destFileName}.png`
		fs.writeFileSync(filePath, buffer)

		return `./assets/${destFileName}.png`
	}

	// const header = res.headers.get('Content-Disposition');
	//   const parts = header!.split(';');
	//   filename = parts[1].split('=')[1];

	// let fileType = srcImagePath.split('.').reverse()[0]
	// if (!['png', 'jpg', 'jpeg', 'webp', 'svg'].includes(fileType)) {
	// 	console.warn(`${srcImagePath} file is unknown`)
	// 	fileType = 'png'
	// }
	try {
		const response = await fetch(srcImagePath)

		let fileType = 'png'
		if (response.headers.get('Content-Type')) {
			if (response.headers.get('Content-Type').split('/')[0] !== 'image') {
				console.warn(
					`${srcImagePath} file is unknown; got ${response.headers.get('Content-Type')}`,
				)
			}

			fileType = response.headers.get('Content-Type').split('/')[1]
		}

		const fileStream = fs.createWriteStream(
			`${destPath}/assets/${destFileName}.${fileType}`,
			{ flags: 'w' },
		)
		await finished(Readable.fromWeb(response.body).pipe(fileStream))

		// .then(async (res) => {
		// 	const fileStream = fs.createWriteStream(`${destPath}/assets/${destFileName}.${fileType}`, { flags: 'w' });
		// 	await finished(Readable.fromWeb(res.body).pipe(fileStream))

		// 	fs.writeFileSync(
		// 		`${destPath}/assets/${destFileName}.${fileType}`,
		// 		await res.buffer(),
		// 	)
		// })
		return `./assets/${destFileName}.${fileType}`
	} catch (err) {
		console.error(err)
		console.error(`Failed to fetch ${srcImagePath}`)
	}
}

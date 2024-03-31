import fs from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';
import { exec } from 'node:child_process';

import prompts from 'prompts';
import { kebabCase } from 'lodash';
import { titleCase } from 'title-case';

import { getTagsByType } from '@framework/site/src/utils/tags';
import { CollectionTypes, Frameworks } from '@framework/site/src/types';

type Metadata = {
	framework: Frameworks;
	collection: CollectionTypes;
};

(async () => {
	const metadata: Metadata = await prompts([
		{
			type: 'autocomplete',
			name: 'framework',
			message: 'Which framework(s) should we add this entry to?',
			choices: [
				{ title: 'Angular', value: 'angular' },
				{ title: 'Deno', value: 'deno' },
				{ title: 'GraphQL', value: 'graphql' },
				{ title: 'NodeJS', value: 'nodejs' },
				{ title: 'Qwik', value: 'qwik' },
				{ title: 'React', value: 'react' },
				{ title: 'SolidJS', value: 'solidjs' },
				{ title: 'Svelte', value: 'svelte' },
				{ title: 'Vue', value: 'vue' },
			],
		},
		{
			type: 'autocomplete',
			name: 'collection',
			message: 'Which collection should we add this entry to?',
			choices: [
				{ title: 'Blogs', value: 'blogs' },
				{ title: 'Books', value: 'books' },
				{ title: 'Communities', value: 'communities' },
				{ title: 'Courses', value: 'courses' },
				{ title: 'Libraries', value: 'libraries' },
				{ title: 'Podcasts', value: 'podcasts' },
				{ title: 'Tools', value: 'tools' },
			],
		},
	]);

	const entryData = await prompts(getPromptsForMetadata(metadata));

	try {
		const pathName = `packages/site/src/content/${metadata.framework}-${metadata.collection}`;
		const fileName = getFileName(metadata, entryData);
		fs.writeFileSync(
			`${pathName}/${fileName}.json`,
			JSON.stringify({
				...entryData,
				image: await storeImageAndGetPath(entryData.image, pathName, fileName),
			}),
		);

		exec(`yarn format ${pathName}/${fileName}.json`);
	} catch (err) {
		console.error(err);
	}
})();

const AUTHOR_PROMPT = {
	type: 'text',
	name: 'author',
	message: 'Who is the author of this resource?',
};
const LEVEL_PROMPT = {
	type: 'select',
	name: 'level',
	message: 'What level of difficulty is this resource?',
	choices: [
		{ title: 'Beginner', value: 'beginner' },
		{ title: 'Intermediate', value: 'intermediate' },
		{ title: 'Advanced', value: 'advanced' },
	],
};
const DARK_IMAGE_BACKGROUND_PROMPT = {
	type: 'confirm',
	name: 'darkImageBackground',
	message: 'Is the image an SVG that supports a dark mode switcher?',
	initial: false,
};

function getPromptsForMetadata(metadata: Metadata) {
	const availableTags = getTagsByType(metadata.collection, metadata.framework)
		.filter((tag) => !!tag)
		.map((tag) => ({
			title: titleCase(tag.toLowerCase()),
			value: tag,
		}));
	const defaultPrompts = [
		getLabelPrompt(metadata.collection),
		{
			type: 'text',
			name: 'href',
			message: `What is the URL for this resource?`,
		},
		{
			type: 'text',
			name: 'image',
			message: 'What is the URL for the image for this resource?',
		},
		{
			type: 'text',
			name: 'description',
			message: 'What is the description for this resource?',
		},
		{
			type: () => (availableTags.length > 0 ? 'multiselect' : null),
			name: 'tags',
			message: 'How should this resource be tagged?',
			choices: availableTags,
			hint: '- Space to select. Return to submit',
		},
	];

	switch (metadata.collection) {
		case 'blogs':
		case 'tools':
			return [...defaultPrompts, AUTHOR_PROMPT];
		case 'books':
			return [
				...defaultPrompts,
				{
					type: 'list',
					name: 'authors',
					message:
						'Who is the book author? Please use a comma to separate multiple authors.',
					initial: '',
					separator: ',',
				},
				{
					type: 'number',
					name: 'yearOfPublication',
					message: 'What year was this book published?',
				},
				{
					type: 'number',
					name: 'numberOfPages',
					message: 'How many pages are in the book?',
				},
				LEVEL_PROMPT,
			];
		case 'communities':
			return [
				...defaultPrompts,
				DARK_IMAGE_BACKGROUND_PROMPT,
				{
					type: 'select',
					name: 'type',
					message: 'What type of community is this?',
					choices: [
						{ value: 'Discord' },
						{ value: 'Live and Online Events' },
						{ value: 'Live Events' },
						{ value: 'Online Events' },
						{ value: 'Online' },
						{ value: 'Reddit' },
					],
				},
			];
		case 'courses':
			return [
				...defaultPrompts,
				AUTHOR_PROMPT,
				LEVEL_PROMPT,
				{
					type: 'select',
					name: 'paymentType',
					message: 'Is this course free or paid?',
					choices: [
						{ title: 'Free', value: 'free' },
						{ title: 'Paid', value: 'paid' },
					],
				},
				{
					type: 'select',
					name: 'format',
					message: 'What format is the course in?',
					choices: [
						{ title: 'Text', value: 'text' },
						{ title: 'Interactive', value: 'interactive' },
						{ title: 'Video', value: 'video' },
					],
				},
			];
		case 'libraries':
			return [
				...defaultPrompts,
				AUTHOR_PROMPT,
				DARK_IMAGE_BACKGROUND_PROMPT,
				{
					type: 'text',
					name: 'repo',
					message:
						'What is the URL for the repository containing this library? (e.g. https://www.github.com/withastro/astro)',
				},
				{
					type: 'text',
					name: 'package',
					message:
						'What is the public listing URL for this repo on its package manager? (e.g. https://www.npmjs.com/package/astro)',
				},
				{
					type: 'select',
					name: 'language',
					message: 'What language is this library for?',
					choices: [
						{ value: 'C#' },
						{ value: 'CSS' },
						{ value: 'Elixir' },
						{ value: 'Go' },
						{ value: 'Haskell' },
						{ value: 'Java' },
						{ value: 'JavaScript' },
						{ value: 'NodeJS' },
						{ value: 'Python' },
						{ value: 'Scala' },
						{ value: 'Swift' },
						{ value: 'TypeScript' },
						{ value: 'unknown' },
					],
					initial: 6,
				},
			];
		case 'podcasts':
			return [
				...defaultPrompts,
				{
					type: 'list',
					name: 'hosts',
					message:
						'Who is the host of the podcast? Please use a comma to separate multiple hosts.',
					initial: '',
					separator: ',',
				},
				{
					type: 'text',
					name: 'rss',
					message:
						'What is the RSS feed URL for this podcast? (e.g. https://www.podbean.com/site/podcatcher/index/blog/7YqKYcoGcvP)',
				},
			];
		default:
			return [...defaultPrompts];
	}
}

function getLabelPrompt(collectionType: CollectionTypes) {
	if (['books', 'blogs', 'courses', 'podcast'].includes(collectionType)) {
		return {
			type: 'text',
			name: 'title',
			message: 'What is the title of the entry?',
		};
	}
	if (['communities', 'libraries', 'podcasts'].includes(collectionType)) {
		return {
			type: 'text',
			name: 'name',
			message: 'What is the name of the entry?',
		};
	}
	throw new Error(
		`No label prompt found for collection type: ${collectionType}`,
	);
}

function getFileName(metadata: Metadata, entryData: any) {
	switch (metadata.collection) {
		case 'books':
			return kebabCase(
				`${entryData.title.toLowerCase()} ${entryData.authors.join(' ').toLowerCase()}`,
			);
		case 'courses':
			return kebabCase(
				`${entryData.title.toLowerCase()} ${entryData.author.toLowerCase()}`,
			);
		case 'communities':
		case 'libraries':
		case 'tools':
			return kebabCase(entryData.name.toLowerCase());
		case 'blogs':
		case 'podcasts':
		default:
			return kebabCase(entryData.title.toLowerCase());
	}
}

async function storeImageAndGetPath(
	srcImagePath: string,
	destPath: string,
	destFileName: string,
) {
	// if image is base64 encoded
	if (srcImagePath.startsWith('data:image')) {
		const base64Data = srcImagePath.replace(/^data:image\/\w+;base64,/, '');
		const buffer = Buffer.from(base64Data, 'base64');
		const filePath = `${destPath}/assets/${destFileName}.png`;
		fs.writeFileSync(filePath, buffer);

		return `./assets/${destFileName}.png`;
	}

	try {
		const response = await fetch(srcImagePath);

		let fileType = 'png';
		const contentType = response.headers.get('Content-Type');
		if (contentType) {
			if (contentType?.split('/')[0] !== 'image') {
				console.warn(`${srcImagePath} file is unknown; got ${contentType}`);
			}

			fileType = contentType.split('/')[1];
			if (fileType === 'svg+xml') {
				fileType = 'svg';
			}
		}

		const fileStream = fs.createWriteStream(
			`${destPath}/assets/${destFileName}.${fileType}`,
			{ flags: 'w' },
		);
		// @ts-expect-error this definitely works but there's no type for it
		await finished(Readable.fromWeb(response.body).pipe(fileStream));

		return `./assets/${destFileName}.${fileType}`;
	} catch (err) {
		console.error(err);
		console.error(`Failed to fetch ${srcImagePath}`);
	}
}

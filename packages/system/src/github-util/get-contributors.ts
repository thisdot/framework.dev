import pRetry, { AbortError } from 'p-retry'
import { ContributorData } from '../components/homepage/contributor'

interface ContributorApiData {
	login: string
	html_url: string
	avatar_url: string
}

export const getContributorsData = async (): Promise<ContributorData[]> => {
	const runFetch = async () => {
		const abortError = new AbortError('Failed to fetch contributors')
		const response =
			process.env.NODE_ENV !== 'development'
				? await fetch(
						'https://api.github.com/repos/thisdot/framework.dev/contributors?anon=1',

						{
							headers: {
								Authorization: `Token ${process.env.GITHUB_API_ACCESS_TOKEN}`,
							},
						}
				  )
				: await fetch(
						'https://api.github.com/repos/thisdot/framework.dev/contributors?anon=1'
				  )

		if (!response.ok) {
			throw abortError
		}
		const data = await response.json()
		if (!data) {
			throw abortError
		}

		return data
	}

	try {
		const data = await pRetry(runFetch, {
			retries: 3,
			onFailedAttempt: (error) => {
				console.log(
					`getContributorsData Failure: Attempt ${error.attemptNumber} failed. There are ${error.retriesLeft} retries left.`
				)
			},
		})

		return data.map((user: ContributorApiData) => ({
			login: user.login,
			url: user.html_url,
			avatarUrl: user.avatar_url,
		}))
	} catch (error) {
		throw new Error(
			'Failed to fetch contributors. Please try rebuilding the website.'
		)
	}
}

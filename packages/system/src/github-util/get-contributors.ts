import { ContributorData } from "../components/homepage/contributor"

interface ContributorApiData {
	login: string
	html_url: string
	avatar_url: string
}

const ATTEMPT_COUNT = 5
const WAIT_MS = 2000

export const getContributorsData = async (): Promise<ContributorData[]> => {
	const runFetch = async () => {
		const error = new Error("Failed to fetch contributors")
		const response = await fetch(
			"https://api.github.com/repos/thisdot/framework.dev/contributors?anon=1"
		)
		if (!response.ok) {
			throw error
		}
		const data = await response.json()
		if (!data) {
			throw error
		}

		return data
	}

	let contributorsList: ContributorData[] | undefined = undefined
	for (const attempt of Array.from({ length: ATTEMPT_COUNT }).map(
		(_, i) => i
	)) {
		try {
			// Wait before retrying
			if (attempt > 0) {
				await new Promise((resolve) => setTimeout(resolve, WAIT_MS))
			}

			const data = await runFetch()
			contributorsList = data.map((user: ContributorApiData) => ({
				login: user.login,
				url: user.html_url,
				avatarUrl: user.avatar_url,
			}))
		} catch (error) {
			console.log(
				`getContributorsData Failure: Attempt failed. There are ${
					ATTEMPT_COUNT - attempt
				} retries left.`
			)
		}
	}

	if (!contributorsList) {
		throw new Error(
			"Failed to fetch contributors. Please try rebuilding the website."
		)
	}

	return contributorsList
}

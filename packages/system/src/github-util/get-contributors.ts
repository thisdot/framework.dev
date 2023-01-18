import { ContributorData } from "../components/homepage/contributor"

interface ContributorApiData {
	login: string
	html_url: string
	avatar_url: string
}

export const getContributorsData = (): Promise<ContributorData[]> => {
	return fetch(
		"https://api.github.com/repos/thisdot/framework.dev/contributors?anon=1"
	)
		.then((res) => res.json())
		.then((data: ContributorApiData[]) =>
			(data ?? [])?.map((user) => ({
				login: user.login,
				url: user.html_url,
				avatarUrl: user.avatar_url,
			}))
		)
}

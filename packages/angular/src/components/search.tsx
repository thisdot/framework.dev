import {
	Search as _Search,
	SearchProps,
} from "@framework/system/src/components/search/search"
import { useEffect, useState } from "react"
import { searchData } from "../data/search-data"

export default function Search(props: SearchProps) {
	const [initialQuery, setInitialQuery] = useState("")
	useEffect(() => {
		setInitialQuery(
			new URLSearchParams(document.location.search).get("q") ?? ""
		)
	}, [])
	return (
		<_Search
			{...props}
			data={searchData}
			initialQuery={initialQuery}
			key={initialQuery ? "client-loaded" : "ssr"}
		/>
	)
}

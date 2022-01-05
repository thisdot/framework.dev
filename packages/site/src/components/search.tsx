import {
	Search as _Search,
	SearchProps,
} from "@framework/system/src/components/search/search"
import { useEffect, useState } from "react"

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
			initialQuery={initialQuery}
			key={initialQuery ? "client-loaded" : "ssr"}
		/>
	)
}

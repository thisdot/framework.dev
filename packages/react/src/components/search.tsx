import {
	Search as _Search,
	SearchProps,
} from "@framework/system/src/components/search/search"
import { searchData } from "../data/search-data"

export default function Search(props: SearchProps) {
	return <_Search {...props} data={searchData} />
}

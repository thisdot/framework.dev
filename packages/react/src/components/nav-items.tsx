import {
	formatFieldName,
	serializeFieldName,
} from "@framework/system/src/util/string-utils"
import { searchData } from "../data/search-data"

export function NavItems(): JSX.Element {
	return (
		<>
			{searchData.map((category) => (
				<a
					href={`/categories/${serializeFieldName(category.name)}`}
					key={category.name}
				>
					{formatFieldName(category.name)}
				</a>
			))}
		</>
	)
}

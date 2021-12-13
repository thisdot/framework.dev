import { NavItem } from "@framework/system/src/components/nav-item"
import { NavList, NavListItem } from "@framework/system/src/components/nav-list"
import { CategoryName } from "@framework/system/src/models/all-categories"
import {
	formatFieldName,
	formatFieldValue,
	serializeFieldName,
	serializeFieldValue,
} from "@framework/system/src/util/string-utils"
import { searchData } from "../data/search-data"

export type NavItemsProps = {
	currentCategory?: CategoryName
	currentTag?: string
}

export function NavItems({
	currentCategory,
	currentTag,
}: NavItemsProps): JSX.Element {
	return (
		<NavList>
			{searchData.map((category) => (
				<NavListItem key={category.name}>
					<NavItem
						aria-current={
							currentCategory === category.name && !currentTag
								? "page"
								: undefined
						}
						aria-expanded={
							category.subCategories
								? currentCategory === category.name
								: undefined
						}
						href={`/categories/${serializeFieldName(category.name)}`}
					>
						{formatFieldName(category.name)}
					</NavItem>
					{category.subCategories && (
						<NavList>
							{category.subCategories.map((subCategory) => (
								<NavListItem key={subCategory}>
									<NavItem
										aria-current={
											currentCategory === category.name &&
											currentTag === subCategory
												? "page"
												: undefined
										}
										href={`/categories/${serializeFieldName(
											category.name
										)}/tags/${serializeFieldValue(subCategory)}`}
									>
										{formatFieldValue(subCategory)}
									</NavItem>
								</NavListItem>
							))}
						</NavList>
					)}
				</NavListItem>
			))}
		</NavList>
	)
}

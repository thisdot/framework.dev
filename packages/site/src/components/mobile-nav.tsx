import { sprinkles } from "@framework/system/src/sprinkles/sprinkles.css"
import {
	MobileNav as MobileNavComponent,
	MobileNavProps,
} from "@framework/system/src/components/mobile-nav"
import { NavItems, NavItemsProps } from "./nav-items"

export function MobileNav({
	currentCategory,
	currentTag,
	data,
	...props
}: MobileNavProps & NavItemsProps) {
	return (
		<MobileNavComponent {...props}>
			<div className={sprinkles({ layout: "stack", gap: 24 })}>
				<NavItems
					data={data}
					currentCategory={currentCategory}
					currentTag={currentTag}
				/>
			</div>
		</MobileNavComponent>
	)
}

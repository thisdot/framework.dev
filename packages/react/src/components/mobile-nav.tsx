import { sprinkles } from "@framework/system/src/sprinkles/sprinkles.css"
import {
	MobileNav as MobileNavComponent,
	MobileNavProps,
} from "@framework/system/src/components/mobile-nav"
import { NavItems } from "./nav-items"

export function MobileNav(props: MobileNavProps) {
	return (
		<MobileNavComponent {...props}>
			<div className={sprinkles({ layout: "stack", gap: 24 })}>
				<NavItems />
			</div>
		</MobileNavComponent>
	)
}

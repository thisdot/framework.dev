import { sprinkles } from "@framework/system/src/sprinkles/sprinkles.css"
import {
	MobileNav as MobileNavComponent,
	MobileNavProps,
} from "@framework/system/src/components/mobile-nav"
import startCase from "lodash/startCase"

type Props = MobileNavProps & { categories: string[] }

export function MobileNav({ categories, ...props }: Props) {
	return (
		<MobileNavComponent {...props}>
			<div className={sprinkles({ layout: "stack", gap: 24 })}>
				{categories.map((category) => (
					<a href={`/categories/${category}`} key={category}>
						{startCase(category)}
					</a>
				))}
			</div>
		</MobileNavComponent>
	)
}

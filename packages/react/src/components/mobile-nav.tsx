import {
	MobileNav as MobileNavComponent,
	MobileNavProps,
} from "@framework/system/src/components/mobile-nav"
import startCase from "lodash/startCase"

type Props = MobileNavProps & { categories: string[] }

export function MobileNav({ categories, ...props }: Props) {
	return (
		<MobileNavComponent {...props}>
			{categories.map((category) => (
				<a href={`/categories/${category}`} key={category}>
					{startCase(category)}
				</a>
			))}
		</MobileNavComponent>
	)
}

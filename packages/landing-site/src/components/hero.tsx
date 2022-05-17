import { Hero as _Hero } from "@framework/system/src/components/landing/hero"
import { FrameworkDevRawIcon } from "@framework/system/src/icons/framework-dev-raw-icon"
import { FRAMEWORK_RESOURCES } from "../constants"

export default function Hero() {
	return (
		<_Hero
			heroText={{
				highlightedTitle: "Welcome to ",
				icon: <FrameworkDevRawIcon size="full" />,
				subtitle:
					"Search for top web technologies, compare key features, and discover community-curated resources to help you learn!",
			}}
			linkCards={FRAMEWORK_RESOURCES({ bigSize: true })}
		/>
	)
}

import { Hero as _Hero } from "@framework/system/src/components/landing/hero"
import { FRAMEWORK_RESOURCES } from "@framework/system/src/globals/global-constants"
import { FrameworkDevRawIcon } from "@framework/system/src/icons/framework-dev-raw-icon"

export default function Hero() {
	return (
		<_Hero
			heroText={{
				highlightedTitle: "Welcome to ",
				icon: <FrameworkDevRawIcon size="full" />,
				subtitle:
					"Search for top web technologies, compare key features, and discover community-curated resources to help you learn!",
			}}
			linkCards={FRAMEWORK_RESOURCES(true)}
		/>
	)
}

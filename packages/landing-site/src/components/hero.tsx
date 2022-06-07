import { Hero as _Hero } from "@framework/system/src/components/landing/hero"
import { FrameworkDevIcon } from "@framework/system/src/icons/framework-dev-icon"
import { FRAMEWORK_RESOURCES } from "../constants"

export default function Hero() {
	return (
		<_Hero
			heroText={{
				highlightedTitle: "Welcome to",
				icon: <FrameworkDevIcon size="full" color="#2e3132" />,
				subtitle:
					"Search for top web technologies, compare key features, and discover community-curated resources to help you learn!",
			}}
			linkCards={FRAMEWORK_RESOURCES}
		/>
	)
}

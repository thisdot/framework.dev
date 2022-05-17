import { ResourcesInfoBanner as _ResourcesInfoBanner } from "@framework/system/src/components/landing/resources-info-banner"
import { sprinkles } from "@framework/system/src/sprinkles/sprinkles.css"
import { FRAMEWORK_RESOURCES } from "../constants"

export default function ResourcesInfoBanner() {
	return (
		<_ResourcesInfoBanner
			title="Get Started"
			description="Select one of the frameworks below to begin exploring framework.dev!"
			cardResources={FRAMEWORK_RESOURCES()}
			className={sprinkles({
				marginTop: { mobile: 56, desktop: 152 },
			})}
		/>
	)
}

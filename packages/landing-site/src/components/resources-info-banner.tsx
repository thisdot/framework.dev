import { ResourcesInfoBanner as _ResourcesInfoBanner } from "@framework/system/src/components/landing/resources-info-banner"
import { FRAMEWORK_RESOURCES } from "@framework/system/src/globals/global-constants"
import { sprinkles } from "@framework/system/src/sprinkles/sprinkles.css"

export default function ResourcesInfoBanner() {
	return (
		<_ResourcesInfoBanner
			title="Get Started"
			description="Select one of the frameworks below to begin exploring framework.dev!"
			resourceCards={FRAMEWORK_RESOURCES()}
			className={sprinkles({
				marginTop: { mobile: 56, desktop: 152 },
			})}
		/>
	)
}

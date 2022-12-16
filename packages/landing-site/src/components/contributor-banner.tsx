import { ContributorBanner as _ContributorBanner } from "@framework/system/src/components/homepage/contributor-banner"
import { ContributorData } from "@framework/system/src/components/homepage/contributor"
import { sprinkles } from "@framework/system/src/sprinkles/sprinkles.css"

export default function ContributorBanner({
	contributors,
}: {
	contributors: ContributorData[]
}) {
	return (
		<_ContributorBanner
			contributors={contributors}
			className={sprinkles({
				marginTop: { mobile: 56, desktop: 152 },
			})}
		/>
	)
}

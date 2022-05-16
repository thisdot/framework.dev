import { PitchCard } from "@framework/system/src/components/landing/pitch-card"
import { sprinkles } from "@framework/system/src/sprinkles/sprinkles.css"

export default function PitchCards() {
	return (
		<div
			className={sprinkles({
				marginTop: { desktop: 152, mobile: 56 },
				display: "flex",
				flexDirection: "column",
				gap: 64,
			})}
		>
			<PitchCard
				pitchText={{
					highlightedText: "Search",
					softText: "for libraries and resources based on your interests.",
				}}
				imageUrl="/pitch-image-2.png"
			/>

			<PitchCard
				pitchText={{
					highlightedText: "Compare",
					softText: "libraries using key data points to understand what's best for your use case.",
				}}
				imageUrl="/pitch-image-3.png"
			/>

			<PitchCard
				pitchText={{
					highlightedText: "Discover",
					softText: "books, podcasts, libraries, courses and more by exploring the collection of resources!",
				}}
				imageUrl="/pitch-image-1.png"
			/>
		</div>
	)
}

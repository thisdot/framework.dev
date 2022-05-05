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
					highlightedText: "Diferent channels",
					softText: "Browse books, podcasts, libraries, curses and more",
				}}
				imageUrl="/pitch-image-1.png"
			/>

			<PitchCard
				pitchText={{
					highlightedText: "Search",
					softText: "for the resources you are interested in",
				}}
				imageUrl="/pitch-image-2.png"
			/>

			<PitchCard
				pitchText={{
					highlightedText: "Compare libraries",
					softText: "you're considering using key data points",
				}}
				imageUrl="/pitch-image-3.png"
			/>
		</div>
	)
}

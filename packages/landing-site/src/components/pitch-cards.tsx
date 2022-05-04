import { PitchCard } from "@framework/system/src/components/landing/pitch-card"

export default function PitchCards() {
	return (
		<>
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
		</>
	)
}

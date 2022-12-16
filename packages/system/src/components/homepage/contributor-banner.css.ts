import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"

export const contributorBannerStyle = style([
	sprinkles({
		padding: { mobile: 32, tablet: 56 },
		borderRadius: 12,
		gap: { mobile: 32, tablet: 16 },
		display: {
			mobile: "flex",
			tablet: "grid",
		},
		flexDirection: "column",
		alignItems: "start",
	}),
	{
		backgroundColor: "transparent",
		gridTemplateColumns: "1fr 3fr min-content",
	},
])

const contributorsSpacingPx = 4
export const contributorsContainerStyle = style([
	{
		margin: pxToRem(-contributorsSpacingPx / 2),
	},
])

export const contributorElementStyle = style([
	{
		margin: pxToRem(contributorsSpacingPx / 2),
	},
])

export const buttonStyles = style([
	sprinkles({
		paddingX: 24,
	}),
	{ height: pxToRem(48), width: "92%", marginTop: pxToRem(12) },
])

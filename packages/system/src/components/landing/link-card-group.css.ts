import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"

export const LinkCardGroupItemStyle = style([
	sprinkles({
		marginBottom: { mobile: 8, desktop: 0 },
		marginRight: { mobile: 0, desktop: 24 },
		width: { mobile: "full", desktop: "auto" },
	}),
])

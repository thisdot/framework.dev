import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"

export const LinkCardGroupItemStyle = style([
	sprinkles({
		width: { mobile: "full", desktop: "auto" },
	}),
])

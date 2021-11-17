import { sprinkles } from "../../sprinkles/sprinkles.css"

export const filterMenuHeaderStyle = sprinkles({
	layout: "row",
	paddingY: 24,
	paddingX: 16,
	gap: 8,
	backgroundColor: "surface2",
	alignItems: "center",
})

export const filterMenuHeadingStyle = sprinkles({
	textStyle: "subtitle1",
	width: "full",
})

export const filterMenuFilterContainerStyle = sprinkles({
	layout: "stack",
	gap: 16,
	paddingY: 24,
})

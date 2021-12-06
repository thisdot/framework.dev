import { sprinkles } from "../../sprinkles/sprinkles.css"

export const filterStyle = sprinkles({ paddingX: 16, paddingY: 12 })

export const filterTitleStyle = sprinkles({
	textStyle: "caption",
	color: "softText",
})

export const filterCheckboxesStyle = sprinkles({
	layout: "row",
	flexWrap: "wrap",
	gap: 8,
})

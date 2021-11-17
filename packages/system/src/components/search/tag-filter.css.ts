import { sprinkles } from "../../sprinkles/sprinkles.css"

export const tagFilterStyle = sprinkles({ paddingX: 16, paddingY: 12 })

export const tagFilterTitleStyle = sprinkles({
	textStyle: "bodyShort3",
	fontWeight: "bold",
	color: "softText",
})

export const tagFilterBodyStyle = sprinkles({ layout: "stack", gap: 16 })

export const tagFilterSearchStyle = sprinkles({ padding: 0 })

export const tagFilterSearchTitleStyle = sprinkles({
	textStyle: "overline",
	color: "softText",
	paddingBottom: 8,
})

export const tagFilterSearchBodyStyle = sprinkles({ layout: "row", gap: 4 })

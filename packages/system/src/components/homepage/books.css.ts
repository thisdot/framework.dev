import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"

export const booksStyle = style([
	sprinkles({
		// Put sprinkles here
	}),
	{
		// Put custom CSS here
	},
])

export const emptyState = style([
	sprinkles({}),
	{
		background: "white",
		height: "75%",
		padding: "12px",
		borderRadius: "12	px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
])

export const emptyStateContainer = style([
	sprinkles({}),
	{
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
])

export const emptyStateContentContainer = style([
	sprinkles({}),
	{
		padding: 24,
	},
])

export const emptyStateTitle = style([
	sprinkles({}),
	{
		marginBottom: "8px",
		textAlign: "center",
		fontWeight: 500,
	},
])

export const emptyStateDescription = style([
	sprinkles({}),
	{
		fontSize: 14,
		color: "#6B6C6F",
	},
])

export const emptyStateBookContainer = style([
	sprinkles({}),
	{
		marginTop: "24px",
		width: 175,
		height: 220,
		background: "#CEDEFD",
		borderRadius: "4px",
		display: "grid",
		gridTemplateColumns: "30px 1fr",
	},
])

export const emptyStateBookBinding = style([
	sprinkles({}),
	{
		width: 30,
		background: "#497aa6",
		height: "100%",
		borderTopLeftRadius: "4px",
		borderBottomLeftRadius: "4px",
	},
])

export const emptyStateBookCover = style([
	sprinkles({}),
	{
		position: "relative",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
])

export const emptyStateBookTitle = style([
	sprinkles({}),
	{
		fontSize: 12,
		fontWeight: "bold",
		color: "#333",
		textAlign: "center",
		paddingRight: "12px",
		marginTop: "24px",
	},
])

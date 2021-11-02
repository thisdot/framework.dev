import { globalStyle } from "@vanilla-extract/css"

globalStyle("body", {
	fontFamily: "Inter, sans-serif",
})
globalStyle("h1, h2, h3, h4, h5, h6", {
	margin: 0,
})

globalStyle("a, button", {
	cursor: "pointer",
})

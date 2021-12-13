import { globalStyle } from "@vanilla-extract/css"
import { derivedAttributes } from "../themes/themes.css"

globalStyle("html", {
	position: "fixed",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	overflow: "hidden",
})

globalStyle("body", {
	fontFamily: "Inter, sans-serif",
})

globalStyle("h1, h2, h3, h4, h5, h6", {
	margin: 0,
})

globalStyle("a, button", {
	cursor: "pointer",
})

globalStyle("input[type=search]::-ms-clear, input[type=search]::-ms-reveal", {
	display: "none",
	width: 0,
	height: 0,
})

globalStyle(
	'input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration',
	{ display: "none" }
)

globalStyle("*:focus-visible", {
	outline: derivedAttributes.outline,
})

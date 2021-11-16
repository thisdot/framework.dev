import { style } from "@vanilla-extract/css"
import { pxToRem } from "../../util/style-utils"
import {
	textInputBoxStyle,
	textInputContainerStyle,
	textInputLabelStyle,
} from "../text-input.css"

export const searchInputContainerStyle = style([
	textInputContainerStyle,
	{ position: "relative" },
])
export const searchInputLabelStyle = textInputLabelStyle
export const searchInputBoxStyle = style([
	textInputBoxStyle,
	{ paddingLeft: pxToRem(46), paddingRight: pxToRem(46), height: pxToRem(48) },
])
export const searchInputIconStyle = style({
	width: pxToRem(18),
	height: pxToRem(18),
	position: "absolute",
	bottom: pxToRem(15),
	left: pxToRem(16),
})
export const searchInputResetButtonStyle = style({
	fontSize: pxToRem(18),
	height: pxToRem(48),
	width: pxToRem(46),
	display: "grid",
	alignItems: "center",
	justifyItems: "center",
	position: "absolute",
	bottom: 0,
	right: 0,
})

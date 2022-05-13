import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../../sprinkles/sprinkles.css"
import { pxToRem } from "../../../util/style-utils"
import { vars } from "../../../themes/themes.css"

const cellStyle = style([
	sprinkles({
		borderBottom: "tableCell",
		borderRight: "tableCell",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingX: { mobile: 16, tablet: 24 },
		height: "full",
	}),
	{
		maxWidth: "40vw",
	},
])

export const cellTHStyle = style([
	cellStyle,
	sprinkles({
		fontWeight: "bold",
	}),
	{
		backgroundColor: vars.palette.neutralVariant99,
		position: "sticky",
		top: 0,
		zIndex: 2,
		selectors: {
			"&:first-of-type": {
				"@media": {
					[breakpoints.tablet]: {
						borderTopLeftRadius: pxToRem(12),
					},
				},
			},
			"&:last-of-type": {
				borderRightColor: "transparent",
				"@media": {
					[breakpoints.tablet]: {
						borderTopRightRadius: pxToRem(12),
					},
				},
			},
		},
	},
])

export const cellTHButtonStyle = style([
	sprinkles({
		paddingRight: 12,
	}),
	{
		position: "relative",
		textAlign: "center",
		width: "100%",
		selectors: {
			"&:before,&:after": {
				position: "absolute",
				content: "",
				right: pxToRem(-10),
				width: 0,
				height: 0,
				border: "solid 5px transparent",
				background: "transparent",
			},
			"&:before": {
				borderBottom: `solid 7px ${vars.palette.neutral80}`,
				borderTopWidth: 0,
				top: "calc(50% - 9px)",
			},
			"&:after": {
				borderTop: `solid 7px ${vars.palette.neutral80}`,
				borderBottomWidth: 0,
				bottom: "calc(50% - 9px)",
			},
			[`${cellStyle}[aria-sort="ascending"] &:before`]: {
				borderBottom: `solid 7px ${vars.palette.neutral40}`,
				borderTopWidth: 0,
				top: 0,
			},
			[`${cellStyle}[aria-sort="ascending"] &:after`]: {
				borderTop: `solid 7px transparent`,
				borderBottomWidth: 0,
				bottom: 0,
			},
			[`${cellStyle}[aria-sort="descending"] &:before`]: {
				borderBottom: `solid 7px transparent`,
				borderTopWidth: 0,
				top: 0,
			},
			[`${cellStyle}[aria-sort="descending"] &:after`]: {
				borderTop: `solid 7px ${vars.palette.neutral40}`,
				borderBottomWidth: 0,
				bottom: 0,
			},
		},
	},
])

export const cellTDStyle = style([
	cellStyle,
	{
		backgroundColor: "white",
		selectors: {
			"&:last-child": {
				borderRight: "none",
			},
		},
	},
])

export const cellContentsStyle = style([
	{
		display: "grid",
		gap: 12,
		gridAutoFlow: "column",
		placeItems: "center",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		overflow: "hidden",
	},
])

export const rowHeadingStyle = style([
	cellStyle,
	{
		backgroundColor: "white",
		justifyContent: "center",
		selectors: {
			"&:last-child": {
				borderRight: "none",
			},
		},
	},
])

export const rowHeadingContentsStyle = style([
	sprinkles({
		display: "grid",
		gap: 12,
	}),
	cellContentsStyle,
])

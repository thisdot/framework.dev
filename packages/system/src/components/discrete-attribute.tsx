import classNames from "classnames"
import React from "react"
import { AdvancedIcon } from "../icons/advanced-icon"
import { ArticleIcon } from "../icons/article-icon"
import { BeginnerIcon } from "../icons/beginner-icon"
import { FreeIcon } from "../icons/free-icon"
import { InteractiveIcon } from "../icons/interactive-icon"
import { IntermediateIcon } from "../icons/intermediate-icon"
import { PaidIcon } from "../icons/paid-icon"
import { IconProps } from "../icons/shared-icon-types"
import { VideoIcon } from "../icons/video-icon"
import { CategoryMetadata, CategoryName } from "../models/all-categories"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { ColorTheme } from "../themes/theme-from-palette"
import { formatFieldValue } from "../util/string-utils"
import {
	ArrayElement,
	RecordElement,
	UnionToIntersection,
} from "../util/type-utils"

/**
 * The component accepts a prop in the form `[fieldName, fieldValue]`
 * for fields and values that are discrete/filterable. This type code
 * extracts the valid name/value combinations from the static
 * category metadata. In doing so, we ensure that only valid combinations
 * can be passed to the component and that the component must adequately
 * handle all valid combinations.
 */
type AllFilterableFields<M = CategoryMetadata<CategoryName>> =
	M extends CategoryMetadata<CategoryName>
		? {
				[FieldName in keyof M["filterableFields"]]: [
					FieldName,
					ArrayElement<M["filterableFields"][FieldName]>
				]
		  }
		: never

type AttributeDefinition = RecordElement<
	UnionToIntersection<AllFilterableFields>
>

export interface DiscreteAttributeProps
	extends React.ComponentPropsWithoutRef<"div"> {
	attribute: AttributeDefinition
	colorize?: boolean
}

export function DiscreteAttribute({
	children,
	className,
	attribute,
	colorize = false,
	...props
}: DiscreteAttributeProps) {
	const Icon = attributeIcon(attribute)
	const color = attributeColor(attribute)
	return (
		<div
			className={classNames(
				className,
				sprinkles({ layout: "row", gap: 6 }),
				colorize && color && sprinkles({ color })
			)}
			{...props}
		>
			<Icon /> {formatFieldValue(attribute[1])}
		</div>
	)
}

function attributeIcon(
	attribute: AttributeDefinition
): React.ComponentType<IconProps> {
	switch (attribute[0]) {
		case "format": {
			switch (attribute[1]) {
				case "interactive":
					return InteractiveIcon
				case "text":
					return ArticleIcon
				case "video":
					return VideoIcon
			}
		}
		case "level": {
			switch (attribute[1]) {
				case "beginner":
					return BeginnerIcon
				case "intermediate":
					return IntermediateIcon
				case "advanced":
					return AdvancedIcon
			}
		}
		case "paymentType": {
			switch (attribute[1]) {
				case "free":
					return FreeIcon
				case "paid":
					return PaidIcon
			}
		}
	}
}

function attributeColor(
	attribute: AttributeDefinition
): keyof ColorTheme["themeColors"] | null {
	switch (attribute[0]) {
		case "level": {
			switch (attribute[1]) {
				case "beginner":
					return "beginner"
				case "intermediate":
					return "intermediate"
				case "advanced":
					return "advanced"
			}
		}
		default:
			return null
	}
}

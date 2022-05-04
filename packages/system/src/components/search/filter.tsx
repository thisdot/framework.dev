import classNames from "classnames"
import React from "react"
import {
	filterCheckboxesStyle,
	filterStyle,
	filterTitleStyle,
} from "./filter.css"
import { FieldFilter } from "../../models/all-categories"
import { ChipSelector } from "../chip-selector"
import { DiscreteAttribute } from "../discrete-attribute"
import { ungroupFieldFilter } from "./query-util"
import { without } from "lodash-es"
import { formatFieldName } from "../../util/string-utils"

export interface FilterProps<T extends FieldFilter = FieldFilter>
	extends React.ComponentPropsWithoutRef<"fieldset"> {
	options: T
	value: T
	onUpdate: (newValue: T) => void
}

export function Filter<T extends FieldFilter>({
	children,
	className,
	options,
	value,
	onUpdate,
	...props
}: FilterProps<T>) {
	return (
		<fieldset className={classNames(className, filterStyle)} {...props}>
			<legend className={filterTitleStyle}>
				{formatFieldName(options[0])}
			</legend>
			<div className={filterCheckboxesStyle}>
				{ungroupFieldFilter(options).map((option) => {
					return (
						<ChipSelector
							key={option[1]}
							label={<DiscreteAttribute attribute={option} />}
							checked={value[1].some((value) => option[1] === value)}
							onChange={(e) =>
								onUpdate([
									value[0],
									e.target.checked
										? [option[1], ...without(value[1], option[1])]
										: without(value[1], option[1]),
								] as unknown as T)
							}
						/>
					)
				})}
			</div>
		</fieldset>
	)
}

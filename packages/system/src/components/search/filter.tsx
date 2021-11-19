import classNames from "classnames"
import React from "react"
import { startCase } from "lodash"
import {
	filterCheckboxesStyle,
	filterStyle,
	filterTitleStyle,
} from "./filter.css"
import { Checkbox } from "../checkbox"

export interface FilterProps<T extends string>
	extends React.ComponentPropsWithoutRef<"fieldset"> {
	name: string
	options: readonly T[]
	value: readonly T[]
	onUpdate: (newValue: T[]) => void
}

export function Filter<T extends string>({
	children,
	className,
	name,
	options,
	value,
	onUpdate,
	...props
}: FilterProps<T>) {
	return (
		<fieldset className={classNames(className, filterStyle)} {...props}>
			<legend className={filterTitleStyle}>{name}</legend>
			<div className={filterCheckboxesStyle}>
				{options.map((option) => {
					const otherValues = value.filter((v) => v !== option)
					return (
						<Checkbox
							key={option}
							label={startCase(option)}
							checked={value.includes(option)}
							onChange={(e) =>
								onUpdate(
									e.target.checked ? [...otherValues, option] : otherValues
								)
							}
						/>
					)
				})}
			</div>
		</fieldset>
	)
}

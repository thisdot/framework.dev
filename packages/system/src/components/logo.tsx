import classnames from "classnames"
import React from "react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { Counter } from "./counter"

export type LogoProps = React.ComponentPropsWithoutRef<"div">

export function Logo({ className }: LogoProps) {
	return (
		<div
			className={classnames(
				className,
				sprinkles({ layout: "row", gap: 4, alignItems: "center" })
			)}
		>
			<span
				className={sprinkles({
					color: "strongText",
					fontWeight: "bold",
					textStyle: "sectionHeading",
				})}
			>
				Framework
			</span>
			<Counter>dev</Counter>
		</div>
	)
}

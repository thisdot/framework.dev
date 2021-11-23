import React, { useState, useEffect, useRef } from "react"
import classNames from "classnames"
import {
	horizontalScrollbarContainerStyle,
	horizontalScrollbarContentStyle,
	horizontalScrollbarSectionStyle,
	horizontalScrollbarTrackStyle,
	horizontalScrollbarThumbStyle,
	horizontalScrollbarButtonContainerStyle,
	horizontalScrollbarButtonStyle,
} from "./horizontal-scrollbar.css"
import { ChevronIcon } from "../../../icons/chevron-icon"

export const HorizontalScrollbar = ({
	children,
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) => {
	const scrollSectionRef = useRef<HTMLDivElement>(null)
	const [thumbWidth, setThumbWidth] = useState(5)

	function handleResize(ref: HTMLDivElement) {
		const { clientWidth, scrollWidth } = ref
		const visibleRatio = clientWidth / scrollWidth
		setThumbWidth(Math.max(visibleRatio * 100, 5))
	}

	function handleScrollButton(direction: "left" | "right") {
		const { current } = scrollSectionRef
		if (current) {
			const scrollAmount = direction === "right" ? 200 : -200
			current.scrollBy({ left: scrollAmount, behavior: "smooth" })
		}
	}

	useEffect(() => {
		if (scrollSectionRef.current) {
			const ref = scrollSectionRef.current
			handleResize(ref)
			const resizeObserver = new ResizeObserver(() => handleResize(ref))
			resizeObserver.observe(ref)
			return () => resizeObserver.disconnect()
		}
	}, [])

	return (
		<div className={classNames(className, horizontalScrollbarContainerStyle)}>
			<div
				className={horizontalScrollbarContentStyle}
				ref={scrollSectionRef}
				{...props}
			>
				{children}
			</div>
			<div className={horizontalScrollbarSectionStyle}>
				<div className={horizontalScrollbarTrackStyle}>
					<div
						className={horizontalScrollbarThumbStyle}
						style={{ width: `${thumbWidth}%` }}
					></div>
				</div>
				<div className={horizontalScrollbarButtonContainerStyle}>
					<button
						className={horizontalScrollbarButtonStyle}
						onClick={() => handleScrollButton("left")}
					>
						<ChevronIcon />
					</button>
					<button
						className={horizontalScrollbarButtonStyle}
						onClick={() => handleScrollButton("right")}
					>
						<ChevronIcon flipped={true} />
					</button>
				</div>
			</div>
		</div>
	)
}

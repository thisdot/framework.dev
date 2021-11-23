import React, { useState, useEffect, useRef, useCallback } from "react"
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
	const [thumbLeft, setThumbLeft] = useState(0)

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

	const handleThumbPosition = useCallback(() => {
		if (!scrollSectionRef.current) {
			return
		}
		const { current } = scrollSectionRef
		const { scrollLeft, scrollWidth, offsetWidth } = current
		let newLeft = (+scrollLeft / +scrollWidth) * offsetWidth
		newLeft = Math.min(newLeft, offsetWidth - thumbWidth)
		setThumbLeft(newLeft)
	}, [])

	useEffect(() => {
		if (scrollSectionRef.current) {
			const ref = scrollSectionRef.current
			handleResize(ref)
			const resizeObserver = new ResizeObserver(() => handleResize(ref))
			resizeObserver.observe(ref)
			ref.addEventListener("scroll", handleThumbPosition)
			return () => {
				resizeObserver.disconnect()
				ref.removeEventListener("scroll", handleThumbPosition)
			}
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
						style={{ width: `${thumbWidth}%`, left: `${thumbLeft}px` }}
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

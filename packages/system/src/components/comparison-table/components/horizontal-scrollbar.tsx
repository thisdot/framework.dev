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
	const scrollTrackRef = useRef<HTMLDivElement>(null)
	const [thumbWidth, setThumbWidth] = useState(20)
	const [thumbLeft, setThumbLeft] = useState(0)

	function handleResize(ref: HTMLDivElement, track: number) {
		const { clientWidth, scrollWidth } = ref
		setThumbWidth(Math.max((clientWidth / scrollWidth) * track, 20))
	}

	function handleScrollButton(direction: "left" | "right") {
		const { current } = scrollSectionRef
		if (current) {
			const scrollAmount = direction === "right" ? 200 : -200
			current.scrollBy({ left: scrollAmount, behavior: "smooth" })
		}
	}

	const handleThumbPosition = useCallback(() => {
		if (!scrollSectionRef.current || !scrollTrackRef.current) {
			return
		}
		const { current } = scrollSectionRef
		const trackWidth = scrollTrackRef.current.clientWidth
		const { scrollLeft, scrollWidth } = current
		let newLeft = (+scrollLeft / +scrollWidth) * trackWidth
		newLeft = Math.min(newLeft, trackWidth - thumbWidth)
		setThumbLeft(newLeft)
	}, [])

	useEffect(() => {
		if (scrollSectionRef.current && scrollTrackRef.current) {
			const ref = scrollSectionRef.current
			const track = scrollTrackRef.current
			handleResize(ref, track.clientWidth)
			const resizeObserver = new ResizeObserver(() =>
				handleResize(ref, track.clientWidth)
			)
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
				<div className={horizontalScrollbarTrackStyle} ref={scrollTrackRef}>
					<div
						className={horizontalScrollbarThumbStyle}
						style={{ width: `${thumbWidth}px`, left: `${thumbLeft}px` }}
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

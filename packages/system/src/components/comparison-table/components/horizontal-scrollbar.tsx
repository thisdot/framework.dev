import React, { useState, useEffect, useRef, useCallback } from "react"
import classNames from "classnames"
import {
	horizontalScrollbarContainerStyle,
	horizontalScrollbarContentStyle,
	horizontalScrollbarSectionStyle,
	horizontalScrollbarTrackAndThumbStyle,
	horizontalScrollbarTrackStyle,
	horizontalScrollbarThumbStyle,
	horizontalScrollbarButtonContainerStyle,
	horizontalScrollbarButtonStyle,
	horizontalScrollbarButtonIconStyle,
} from "./horizontal-scrollbar.css"
import { ChevronIcon } from "../../../icons/chevron-icon"

export const HorizontalScrollbar = ({
	children,
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) => {
	const scrollContentRef = useRef<HTMLDivElement | null>(null)
	const scrollTrackRef = useRef<HTMLDivElement | null>(null)
	const scrollThumbRef = useRef<HTMLDivElement | null>(null)
	const [thumbWidth, setThumbWidth] = useState(20)
	const [scrollStartPosition, setScrollStartPosition] = useState(0)
	const [initialScrollLeft, setInitialScrollLeft] = useState(0)
	const [isDragging, setIsDragging] = useState(false)

	function handleResize(ref: HTMLDivElement, track: number) {
		const { clientWidth, scrollWidth } = ref
		setThumbWidth(Math.max((clientWidth / scrollWidth) * track, 20))
	}

	function handleScrollButton(direction: "left" | "right") {
		const { current } = scrollContentRef
		if (current) {
			const scrollAmount = direction === "right" ? 200 : -200
			current.scrollBy({ left: scrollAmount, behavior: "smooth" })
		}
	}

	const handleTrackClick = useCallback(
		(e) => {
			e.preventDefault()
			e.stopPropagation()
			const { current: trackCurrent } = scrollTrackRef
			const { current: contentCurrent } = scrollContentRef
			if (trackCurrent && contentCurrent) {
				const { clientX } = e
				const target = e.target as HTMLDivElement
				const rect = target.getBoundingClientRect()
				const thumbOffset = -(thumbWidth / 2)
				const clickRatio =
					(clientX - rect.left + thumbOffset) / trackCurrent.clientWidth
				const scrollAmount = Math.floor(clickRatio * contentCurrent.scrollWidth)
				console.log(clickRatio, thumbOffset, scrollAmount)
				contentCurrent.scrollTo({
					left: scrollAmount,
					behavior: "smooth",
				})
			}
		},
		[thumbWidth]
	)

	const handleThumbPosition = useCallback(() => {
		if (
			!scrollContentRef.current ||
			!scrollTrackRef.current ||
			!scrollThumbRef.current
		) {
			return
		}
		const { scrollLeft, scrollWidth } = scrollContentRef.current
		const trackWidth = scrollTrackRef.current.clientWidth
		let newLeft = (+scrollLeft / +scrollWidth) * trackWidth
		newLeft = Math.min(newLeft, trackWidth - thumbWidth)
		const thumb = scrollThumbRef.current
		thumb.style.left = `${newLeft}px`
	}, [thumbWidth])

	const handleThumbMousedown = useCallback((e) => {
		e.preventDefault()
		e.stopPropagation()
		setScrollStartPosition(e.clientX)
		if (scrollContentRef.current)
			setInitialScrollLeft(scrollContentRef.current.scrollLeft)
		setIsDragging(true)
	}, [])

	const handleThumbMouseup = useCallback(
		(e) => {
			e.preventDefault()
			e.stopPropagation()
			if (isDragging) {
				setIsDragging(false)
			}
		},
		[isDragging]
	)

	const handleThumbMousemove = useCallback(
		(e) => {
			e.preventDefault()
			e.stopPropagation()
			if (isDragging && scrollContentRef.current) {
				const {
					scrollWidth: contentScrollWidth,
					offsetWidth: contentOffsetWidth,
				} = scrollContentRef.current

				const deltaX = Math.round(
					(e.clientX - scrollStartPosition) * (contentOffsetWidth / thumbWidth)
				)

				const newScrollLeft = Math.min(
					initialScrollLeft + deltaX,
					contentScrollWidth - contentOffsetWidth
				)

				scrollContentRef.current.scrollLeft = newScrollLeft
				handleThumbPosition()
			}
		},
		[
			handleThumbPosition,
			initialScrollLeft,
			isDragging,
			scrollStartPosition,
			thumbWidth,
		]
	)

	useEffect(() => {
		if (scrollContentRef.current && scrollTrackRef.current) {
			const ref = scrollContentRef.current
			const track = scrollTrackRef.current
			const observer = new ResizeObserver(() => {
				handleResize(ref, track.clientWidth)
			})
			const firstChild = ref.getElementsByTagName("table")[0]
			observer.observe(firstChild)
			ref.addEventListener("scroll", handleThumbPosition)
			return () => {
				observer.unobserve(firstChild)
				ref.removeEventListener("scroll", handleThumbPosition)
			}
		}
	}, [handleThumbPosition])

	useEffect(() => {
		document.addEventListener("mousemove", handleThumbMousemove)
		document.addEventListener("mouseup", handleThumbMouseup)
		document.addEventListener("mouseleave", handleThumbMouseup)
		return () => {
			document.removeEventListener("mousemove", handleThumbMousemove)
			document.removeEventListener("mouseup", handleThumbMouseup)
			document.removeEventListener("mouseleave", handleThumbMouseup)
		}
	}, [handleThumbMousemove, handleThumbMouseup])

	return (
		<div className={classNames(className, horizontalScrollbarContainerStyle)}>
			<div
				className={horizontalScrollbarContentStyle}
				ref={scrollContentRef}
				{...props}
			>
				{children}
			</div>
			<div className={horizontalScrollbarSectionStyle}>
				<div className={horizontalScrollbarTrackAndThumbStyle}>
					<div
						className={horizontalScrollbarTrackStyle}
						ref={scrollTrackRef}
						onClick={handleTrackClick}
						style={{
							cursor: isDragging ? "grabbing" : "pointer",
						}}
					></div>
					<div
						className={horizontalScrollbarThumbStyle}
						onMouseDown={handleThumbMousedown}
						ref={scrollThumbRef}
						style={{
							width: `${thumbWidth}px`,
							cursor: isDragging ? "grabbing" : "grab",
						}}
					></div>
				</div>
				<div className={horizontalScrollbarButtonContainerStyle}>
					<button
						className={horizontalScrollbarButtonStyle}
						onClick={() => handleScrollButton("left")}
						aria-roledescription="scroll left"
					>
						<ChevronIcon className={horizontalScrollbarButtonIconStyle} />
					</button>
					<button
						className={horizontalScrollbarButtonStyle}
						onClick={() => handleScrollButton("right")}
						aria-roledescription="scroll right"
					>
						<ChevronIcon
							flipped={true}
							className={horizontalScrollbarButtonIconStyle}
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

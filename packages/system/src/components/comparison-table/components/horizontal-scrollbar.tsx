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
	horizontalScrollbarButtonIconStyle,
} from "./horizontal-scrollbar.css"
import { ChevronIcon } from "../../../icons/chevron-icon"

export const HorizontalScrollbar = ({
	children,
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) => {
	const scrollSectionRef = useRef<HTMLDivElement>(null)
	const scrollTrackRef = useRef<HTMLDivElement>(null)
	const observer = useRef<ResizeObserver>(null)
	const [thumbWidth, setThumbWidth] = useState(20)
	const [thumbLeft, setThumbLeft] = useState(0)
	const [lastScrollPosition, setLastScrollPosition] = useState(0)
	const [isDragging, setIsDragging] = useState(false)

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

	const handleTrackClick = useCallback(
		(e) => {
			e.preventDefault()
			e.stopPropagation()
			const { current: trackCurrent } = scrollTrackRef
			const { current: contentCurrent } = scrollSectionRef
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

	const handleThumbMousedown = useCallback((e) => {
		e.preventDefault()
		e.stopPropagation()
		setLastScrollPosition(e.clientX)
		setIsDragging(true)
	}, [])

	const handleThumbMouseup = useCallback(
		(e) => {
			if (isDragging) {
				e.preventDefault()
				setIsDragging(false)
			}
		},
		[isDragging]
	)

	const handleThumbMousemove = useCallback(
		(e) => {
			if (isDragging) {
				e.preventDefault()
				e.stopPropagation()
				const {
					scrollWidth: sectionScrollWidth,
					offsetWidth: sectionOffsetWidth,
				} = scrollSectionRef.current
				const { offsetWidth: trackOffsetWidth } = scrollTrackRef.current

				const deltaX = e.clientX - lastScrollPosition

				setLastScrollPosition(e.clientX)
				setThumbLeft(
					Math.min(
						Math.max(0, thumbLeft + deltaX),
						trackOffsetWidth - thumbWidth
					)
				)
				scrollSectionRef.current.scrollLeft = Math.min(
					scrollSectionRef.current.scrollLeft +
						deltaX * (sectionScrollWidth / sectionOffsetWidth),
					sectionScrollWidth - sectionOffsetWidth
				)
			}
		},
		[isDragging, lastScrollPosition, thumbLeft, thumbWidth]
	)

	useEffect(() => {
		if (scrollSectionRef.current && scrollTrackRef.current) {
			const ref = scrollSectionRef.current
			const track = scrollTrackRef.current
			observer.current = new ResizeObserver(() => {
				handleResize(ref, track.clientWidth)
			})
			const firstChild = ref.getElementsByTagName("table")[0]
			observer.current.observe(firstChild)
			ref.addEventListener("scroll", handleThumbPosition)
			return () => {
				observer.current.unobserve(firstChild)
				ref.removeEventListener("scroll", handleThumbPosition)
			}
		}
	}, [])

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
				ref={scrollSectionRef}
				{...props}
			>
				{children}
			</div>
			<div className={horizontalScrollbarSectionStyle}>
				<div
					className={horizontalScrollbarTrackStyle}
					ref={scrollTrackRef}
					onClick={handleTrackClick}
				>
					<div
						className={horizontalScrollbarThumbStyle}
						onMouseDown={handleThumbMousedown}
						style={{
							width: `${thumbWidth}px`,
							left: `${thumbLeft}px`,
							cursor: isDragging ? "grabbing" : "grab",
						}}
					></div>
				</div>
				<div className={horizontalScrollbarButtonContainerStyle}>
					<button
						className={horizontalScrollbarButtonStyle}
						onClick={() => handleScrollButton("left")}
					>
						<ChevronIcon className={horizontalScrollbarButtonIconStyle} />
					</button>
					<button
						className={horizontalScrollbarButtonStyle}
						onClick={() => handleScrollButton("right")}
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

import { useState, useEffect, useRef } from "react"
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
	const [thumbWidth, setThumbWidth] = useState(20)

	useEffect(() => {
		if (scrollSectionRef.current) {
			const { clientWidth, scrollWidth } = scrollSectionRef.current
			const visibleRatio = clientWidth / scrollWidth
			setThumbWidth(Math.max(visibleRatio * clientWidth, 20))
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
						style={{ width: `${thumbWidth}px` }}
					></div>
				</div>
				<div className={horizontalScrollbarButtonContainerStyle}>
					<button className={horizontalScrollbarButtonStyle}>
						<ChevronIcon />
					</button>
					<button className={horizontalScrollbarButtonStyle}>
						<ChevronIcon flipped={true} />
					</button>
				</div>
			</div>
		</div>
	)
}

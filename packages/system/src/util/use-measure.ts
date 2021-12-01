import { useLayoutEffect, useMemo, useState } from "react"

export type UseMeasureRect = ResizeObserverSize
export type UseMeasureRef<E extends Element = Element> = (element: E) => void
export type UseMeasureResult<E extends Element = Element> = [
	UseMeasureRef<E>,
	UseMeasureRect
]

const defaultState: UseMeasureRect = {
	blockSize: 0,
	inlineSize: 0,
}

function useMeasure<E extends Element = Element>(
	options?: ResizeObserverOptions
): UseMeasureResult<E> {
	const [element, ref] = useState<E | null>(null)
	const [rect, setRect] = useState<UseMeasureRect>(defaultState)

	const observer = useMemo(
		() =>
			new window.ResizeObserver((entries) => {
				if (entries[0]) {
					setRect(
						options?.box === "border-box"
							? entries[0].borderBoxSize[0]
							: entries[0].contentBoxSize[0]
					)
				}
			}),
		[options?.box]
	)

	useLayoutEffect(() => {
		if (!element) return
		observer.observe(element, options)
		return () => {
			observer.disconnect()
		}
	}, [element])

	return [ref, rect]
}

export default typeof window !== "undefined" &&
typeof window.ResizeObserver !== "undefined"
	? useMeasure
	: ((() => [() => null, defaultState]) as typeof useMeasure)

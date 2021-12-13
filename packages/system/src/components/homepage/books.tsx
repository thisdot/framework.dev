import classNames from "classnames"
import React from "react"
import { booksStyle } from "./books.css"

export interface BooksProps extends React.ComponentPropsWithoutRef<"div"> {}

export function Books({ children, className, ...props }: BooksProps) {
	return (
		<div className={classNames(className, booksStyle)} {...props}>
			{children}
		</div>
	)
}

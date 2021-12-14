import classNames from "classnames"
import React from "react"
import { Book } from "../../models/book"
import { booksStyle } from "./books.css"

export interface BooksProps extends React.ComponentPropsWithoutRef<"div"> {
	books: Book<string>[]
}

export function Books({ children, className, books, ...props }: BooksProps) {
	return (
		<div className={classNames(className, booksStyle)} {...props}>
			{children}
		</div>
	)
}

import { ReactNode } from "react"
import { sprinkles } from "../sprinkles/index.css"

type Props = {
	children: ReactNode
}

export function SystemNav({ children }: Props) {
	return (
		<nav className={sprinkles({ padding: "large" })}>
			<h1 className={sprinkles({ fontSize: "xl" })}>
				Framework.dev
				<br />
				Design System
			</h1>
			{children}
		</nav>
	)
}

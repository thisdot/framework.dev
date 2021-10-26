import { useEffect, useState } from "react"
import { reactTheme, vueTheme } from "../themes/index.css"
import { selectContainerStyle, selectStyle } from "./theme-selector.css"

export function ThemeSelector() {
	const [theme, setTheme] = useState(reactTheme)
	useEffect(() => {
		document.body.className = theme
	}, [theme])
	return (
		<div className={selectContainerStyle}>
			<select
				className={selectStyle}
				value={theme}
				onChange={(e) => setTheme(e.target.value)}
			>
				<option value={reactTheme}>React</option>
				<option value={vueTheme}>Vue</option>
			</select>
		</div>
	)
}

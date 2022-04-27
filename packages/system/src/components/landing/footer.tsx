import classNames from "classnames"
import React from "react"
import { GithubIcon } from "../../icons/github-icon"
import { footerLinkStyle, footerStyle, footerTextStyle } from "./footer.css"

export interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

export function Footer({ children, className, ...props }: FooterProps) {
	return (
		<footer className={classNames(className, footerStyle)} {...props}>
			<a
				className={footerLinkStyle}
				href="https://github.com/thisdot/framework.dev"
			>
				<GithubIcon size="large" />
				Submit a PR
			</a>
			<p className={footerTextStyle}>© 2022 This Dot, Itc.</p>
		</footer>
	)
}

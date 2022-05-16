import classNames from "classnames"
import React from "react"
import { GithubIcon } from "../../icons/github-icon"
import { footerLinkStyle, footerStyle, footerTextStyle } from "./footer.css"

export interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

export function Footer({ children, className, ...props }: FooterProps) {
	const currentBuildYear = new Date().getFullYear()

	return (
		<footer className={classNames(className, footerStyle)} {...props}>
			<a
				className={footerLinkStyle}
				href="https://github.com/thisdot/framework.dev"
				target="_blank"
				rel="noreferrer noopener"
			>
				<GithubIcon size="large" />
				Submit a PR
			</a>
			<p className={footerTextStyle}>© {currentBuildYear} This Dot, Inc.</p>
		</footer>
	)
}

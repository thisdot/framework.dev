import classNames from "classnames"
import React from "react"
import { GithubIcon } from "../../icons/github-icon"
import { SponsorIcon } from "../../icons/sponsor-icon"
import { footerLinkStyle, footerSponsorIconContainerStyle, footerStyle } from "./footer.css"

export interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

export function Footer({ children, className, ...props }: FooterProps) {
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
			<div className={footerSponsorIconContainerStyle}>
				<SponsorIcon size="full" />
			</div>
		</footer>
	)
}

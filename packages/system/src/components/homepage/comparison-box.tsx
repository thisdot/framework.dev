import classNames from 'classnames'
import React from 'react'
import {
	comparisonBoxStyle,
	comparisonBoxHeadingStyle,
	comparisonBoxHeadingSoftStyle,
	comparisonBoxWhichLibsStyle,
	comparisonBoxImageStyle,
} from './comparison-box.css'
import { Chip } from '../chip'
import { serializeFieldValue } from '../../util/string-utils'

export interface ComparisonBoxProps
	extends React.ComponentPropsWithoutRef<'div'> {
	imageSource?: string
	libraryTags: string[]
}

export function ComparisonBox({
	children,
	className,
	imageSource,
	libraryTags,
	...props
}: ComparisonBoxProps) {
	return (
		<div className={classNames(className, comparisonBoxStyle)} {...props}>
			<h2 className={comparisonBoxHeadingStyle}>
				Compare and select libraries{' '}
				<span className={comparisonBoxHeadingSoftStyle}>
					based on your needs
				</span>
			</h2>
			<p className={comparisonBoxWhichLibsStyle}>
				What libraries do you want to compare?
			</p>
			<div>
				{libraryTags.slice(0, 6).map((tag) => (
					<Chip
						as="a"
						style={{ margin: '0 8px 8px 0' }}
						key={tag}
						href={`/categories/libraries/tags/${serializeFieldValue(tag)}`}
					>
						{tag}
					</Chip>
				))}
			</div>
			{imageSource && (
				<img className={comparisonBoxImageStyle} src={imageSource} alt="" />
			)}
		</div>
	)
}

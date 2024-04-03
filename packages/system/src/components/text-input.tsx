import classNames from 'classnames';
import React from 'react';
import { useId } from '@reach/auto-id';
import {
	textInputBoxStyle,
	textInputContainerStyle,
	textInputLabelStyle,
} from './text-input.css';
import { visuallyHidden } from '../styles/utilities.css';

export interface TextInputProps
	extends React.ComponentPropsWithoutRef<'input'> {
	label: string;
	hideLabel?: boolean;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	function TextInput(
		{
			className,
			label,
			hideLabel = false,
			id: customIdFromProps,
			...props
		}: TextInputProps,
		ref,
	) {
		const id = useId(customIdFromProps);
		return (
			<div className={classNames(className, textInputContainerStyle)}>
				<input
					type="text"
					className={textInputBoxStyle}
					id={id}
					ref={ref}
					{...props}
				/>
				<label
					htmlFor={id}
					className={classNames(
						textInputLabelStyle,
						hideLabel && visuallyHidden,
					)}
				>
					{label}
				</label>
			</div>
		);
	},
);

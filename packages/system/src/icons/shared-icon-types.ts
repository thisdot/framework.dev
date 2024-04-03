import React from 'react';
import { type IconVariants } from './icon.css';

export type IconProps = React.ComponentPropsWithRef<'svg'> & IconVariants;

// 📝: This kind of icons tend to have a stretched form
export type FrameworkIconProps = IconProps & {
	stretched?: boolean;
};

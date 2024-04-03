import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalScrollbar as HorizontalScrollbarComponent } from './horizontal-scrollbar';
import { vars } from '../../../themes/themes.css';
import { exampleScrollbarTableData } from './example-data';

const meta: Meta<typeof HorizontalScrollbarComponent> = {
	title: 'Horizontal Scrollbar',
	component: HorizontalScrollbarComponent,
	parameters: {
		backgrounds: {
			default: 'Light Theme Background',
			values: [
				{
					name: 'Light Theme Background',
					value: vars.themeColors.surface4,
					default: true,
				},
			],
		},
		viewport: { defaultViewport: 'tablet' },
	},
};
export default meta;

type Story = StoryObj<typeof HorizontalScrollbarComponent>;

export const HorizontalScrollbar: Story = {
	render: () => (
		<HorizontalScrollbarComponent>
			<table>
				<tbody>
					{exampleScrollbarTableData.map((row) => (
						<tr key={row.id}>
							{Object.entries(row).map(([key, value]) => (
								<td
									key={`row-${row.id}-${key}`}
									style={{ background: 'white', padding: '12px' }}
								>
									{value}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</HorizontalScrollbarComponent>
	),
};

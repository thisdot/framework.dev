import { Story, Meta } from "@storybook/react"
import { HorizontalScrollbar as HorizontalScrollbarComponent } from "./horizontal-scrollbar"
import { vars } from "../../../themes/themes.css"
import { exampleScrollbarTableData } from "./example-data"
import React from "react"

export default {
	title: "Horizontal Scrollbar",
	component: HorizontalScrollbarComponent,
	parameters: {
		backgrounds: {
			default: "Light Theme Background",
			values: [
				{
					name: "Light Theme Background",
					value: vars.themeColors.surface4,
					default: true,
				},
			],
		},
		viewport: { defaultViewport: "tablet" },
	},
} as Meta

const Template: Story<React.ComponentPropsWithoutRef<"div">> = () => (
	<HorizontalScrollbarComponent>
		<table>
			<tbody>
				{exampleScrollbarTableData.map((row) => (
					<tr key={row.id}>
						{Object.keys(row).map((key) => (
							<td
								key={`row-${row.id}-${key}`}
								style={{ background: "white", padding: "12px" }}
							>
								{row[key]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	</HorizontalScrollbarComponent>
)

export const HorizontalScrollbar = Template.bind({})

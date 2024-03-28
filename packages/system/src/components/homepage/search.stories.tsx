import { type Story, type Meta } from '@storybook/react';
import { Search as SearchComponent, type SearchProps } from './search';

export default {
	title: 'Home/Search',
	component: SearchComponent,
	args: {
		children: 'Hello world',
	},
} as Meta;

const Template: Story<SearchProps> = (args) => <SearchComponent {...args} />;

export const Search = Template.bind({});

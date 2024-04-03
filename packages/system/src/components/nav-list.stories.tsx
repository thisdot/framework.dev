/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { bodyWithNav } from '../styles/layouts.css';
import { NavItem } from './nav-item';
import { NavList as NavListComponent, NavListItem } from './nav-list';

const meta: Meta<typeof NavListComponent> = {
	title: 'Nav List',
	component: NavListComponent,
	args: {
		children: 'Hello world',
	},
};
export default meta;

type Story = StoryObj<typeof NavListComponent>;

export const NavList: Story = {
	render: (args) => {
		const [current, setCurrent] = useState<string | null>(null);
		const isCurrent = (name: string) => (name === current ? 'page' : undefined);
		return (
			<div className={bodyWithNav}>
				<NavListComponent {...args}>
					<NavListItem>
						<NavItem
							aria-current={isCurrent('Libraries')}
							aria-expanded={
								!!(
									isCurrent('Libraries') ||
									isCurrent('Data fetching') ||
									isCurrent('Component library') ||
									isCurrent('Styling') ||
									isCurrent('Internationalization') ||
									isCurrent('State')
								)
							}
							onClick={() => setCurrent('Libraries')}
						>
							Libraries
						</NavItem>
						<NavListComponent>
							<NavListItem>
								<NavItem
									aria-current={isCurrent('Data fetching')}
									onClick={() => setCurrent('Data fetching')}
								>
									Data fetching
								</NavItem>
							</NavListItem>
							<NavListItem>
								<NavItem
									aria-current={isCurrent('Component library')}
									onClick={() => setCurrent('Component library')}
								>
									Component library
								</NavItem>
							</NavListItem>
							<NavListItem>
								<NavItem
									aria-current={isCurrent('Styling')}
									onClick={() => setCurrent('Styling')}
								>
									Styling
								</NavItem>
							</NavListItem>
							<NavListItem>
								<NavItem
									aria-current={isCurrent('Internationalization')}
									onClick={() => setCurrent('Internationalization')}
								>
									Internationalization
								</NavItem>
							</NavListItem>
							<NavListItem>
								<NavItem
									aria-current={isCurrent('State')}
									onClick={() => setCurrent('State')}
								>
									State Management
								</NavItem>
							</NavListItem>
						</NavListComponent>
					</NavListItem>
					<NavListItem>
						<NavItem
							aria-current={isCurrent('Tools')}
							onClick={() => setCurrent('Tools')}
						>
							Tools
						</NavItem>
					</NavListItem>
					<NavListItem>
						<NavItem
							aria-current={isCurrent('Snippets')}
							onClick={() => setCurrent('Snippets')}
						>
							Snippets
						</NavItem>
					</NavListItem>
					<NavListItem>
						<NavItem
							aria-current={isCurrent('Courses')}
							onClick={() => setCurrent('Courses')}
						>
							Courses
						</NavItem>
					</NavListItem>
					<NavListItem>
						<NavItem
							aria-current={isCurrent('Communities')}
							onClick={() => setCurrent('Communities')}
						>
							Communities
						</NavItem>
					</NavListItem>
					<NavListItem>
						<NavItem
							aria-current={isCurrent('Podcasts')}
							onClick={() => setCurrent('Podcasts')}
						>
							Podcasts
						</NavItem>
					</NavListItem>
					<NavListItem>
						<NavItem
							aria-current={isCurrent('Books')}
							onClick={() => setCurrent('Books')}
						>
							Books
						</NavItem>
					</NavListItem>
					<NavListItem>
						<NavItem
							aria-current={isCurrent('Companies')}
							onClick={() => setCurrent('Companies')}
						>
							Companies
						</NavItem>
					</NavListItem>
				</NavListComponent>
			</div>
		);
	},
};

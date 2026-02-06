import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text, type TextProps } from '.';

const text: Meta<typeof Text> = {
	component: Text,
	title: 'Components/Text'
};

export default text;

export const Small: StoryObj<TextProps> = {
	args: {
		size: 'small',
		children: 'Small Text'
	}
};

export const Medium: StoryObj<TextProps> = {
	args: {
		size: 'large',
		children: 'Medium Text'
	}
};
export const Large: StoryObj<TextProps> = {
	args: {
		size: 'large',
		children: 'Large Text'
	}
};

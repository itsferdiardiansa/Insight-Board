import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'
import { FiUser, FiArrowRight } from 'react-icons/fi'
import { userEvent, within } from '@storybook/testing-library'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'outlinePrimary',
        'secondary',
        'outlineSecondary',
        'destructive',
        'outlineDestructive',
        'ghost',
      ],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: { type: 'radio' },
      options: ['none', 'sm', 'md', 'full'],
    },
    fullWidth: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    icon: {
      control: { type: 'select' },
      options: ['none', 'user', 'arrow'],
      mapping: {
        none: null,
        user: <FiUser />,
        arrow: <FiArrowRight />,
      },
      labels: {
        none: 'None',
        user: 'User Icon',
        arrow: 'Arrow Right Icon',
      },
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Click me!',
    fullWidth: false,
    loading: false,
    icon: null,
    iconPosition: 'left',
    onClick: action('You clicked me!'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = await canvas.getByRole('button', { name: /click me/i })
    await userEvent.click(button)
  },
}

export default meta

export const Playground: StoryObj<typeof Button> = {}

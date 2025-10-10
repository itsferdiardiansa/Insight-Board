import { Meta, StoryObj } from '@storybook/nextjs'
import { Newsletter } from '../Newsletter'

const meta: Meta<typeof Newsletter> = {
  title: 'Features/Newsletter',
  component: Newsletter,
  tags: ['dev'],
  args: {
    variant: 'horizontal',
    formLayout: 'horizontal',
    isAnimate: true,
    disabled: true,
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      description: 'Set the layout flow.',
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: {
          summary: 'horizontal',
        },
        type: {
          summary: 'horizontal | vertical',
        },
      },
    },
    formLayout: {
      control: 'inline-radio',
      description: 'Set the layout flow.',
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: {
          summary: 'horizontal',
        },
        type: {
          summary: 'horizontal | vertical',
        },
      },
    },
    isAnimate: {
      control: 'boolean',
      description: 'Use GSAP animation or not',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input and button',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    }
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Vertical: Story = {
  args: {
    variant: 'vertical',
    formLayout: 'vertical',
  },
}

export const NoAnimate: Story = {
  args: {
    isAnimate: false,
  },
}

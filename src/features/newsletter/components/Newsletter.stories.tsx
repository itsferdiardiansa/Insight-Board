import { Meta, StoryObj } from '@storybook/nextjs'
import { Newsletter } from './Newsletter'

const meta: Meta<typeof Newsletter> = {
  title: 'Features/Newsletter',
  component: Newsletter,
  tags: ['autodocs'],
  args: {
    variant: 'horizontal',
    formLayout: 'horizontal',
    isAnimate: true,
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
      description: 'Use animate or not',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

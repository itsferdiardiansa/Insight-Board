import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

import AgileImage from '@/assets/images/agile-methodology.jpg'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    roundedSize: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    border: {
      control: 'select',
      options: ['none', 'full', 'thumbOnly'],
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: 'Project Report',
    description: 'View all your KPIs and team metrics in one place.',
    roundedSize: 'lg',
    padding: 'lg',
    shadow: 'none',
    border: 'full',
  },
}

export const WithImage: Story = {
  args: {
    title: 'Project Report',
    description: 'Real-time metrics with a clear layout.',
    roundedSize: 'lg',
    padding: 'md',
    shadow: 'md',
    border: 'thumbOnly',
    thumbnail: AgileImage,
    aspectRatio: 'aspect-[4/3]',
  },
}

export const WithCustomContent: Story = {
  render: args => (
    <Card {...args}>
      <Card.Content>
        <h3 className="text-xl font-bold mb-2">Custom Title</h3>
        <p className="text-gray-600">
          This is a custom body. You can place any content you want here.
        </p>
      </Card.Content>
    </Card>
  ),
  args: {
    roundedSize: 'lg',
    padding: 'lg',
    shadow: 'lg',
    // border: 'full',
  },
}

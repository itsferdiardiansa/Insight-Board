import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'
import { textSizeMap } from './Card'

import AgileImage from '@/assets/images/agile-methodology.jpg'
import { sizeMapKeys } from '../_utils/variants'

const textSizeKeys = Object.keys(textSizeMap)

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    actions: { disable: true },
    deepControls: {
      enabled: true,
    },
  },
  args: {
    badge: {
      label: '',
    },
    textSize: {
      title: 'lg',
      description: 'md',
      footerAction: 'md',
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of card',
    },
    description: {
      control: 'text',
      description: 'Description of card',
    },
    thumbnail: { control: false },
    roundedSize: {
      control: 'select',
      type: 'sm | md | lg | xl' as never,
      description:
        'Change the corner of the `card` or thumbanil if the thumbnail exist.',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    className: {
      control: 'select',
      type: 'string',
      options: ['gradient-pink', 'gradient-blue'],
      description: 'Set custom className to change the default style.',
      mapping: {
        'gradient-pink': 'bg-gradient-to-tr from-pink-50 to-pink-100',
        'gradient-blue': 'bg-gradient-to-tr from-blue-50 to-blue-100',
      },
    },
    'textSize.title': {
      control: 'select',
      options: textSizeKeys,
    },
    'textSize.description': {
      control: 'select',
      options: textSizeKeys,
    },
    'textSize.footerAction': {
      control: 'select',
      options: textSizeKeys,
    },
    'badge.label': {
      control: 'text',
    },
    'badge.size': {
      control: 'select',
      type: sizeMapKeys.join(' | '),
      options: sizeMapKeys,
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
    className: 'gradient-pink',
    link: 'https://google.com',
    thumbnail: undefined,
  },
}

export const WithImage: Story = {
  args: {
    title: 'Project Report',
    description: 'Real-time metrics with a clear layout.',
    thumbnail: AgileImage,
    roundedSize: 'lg',
    padding: 'md',
    link: 'https://google.com',
    metaItems: ['Product', '28.2025'],
    footerActionLabel: 'Read more',
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
  },
}

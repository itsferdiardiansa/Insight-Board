import type { Meta, StoryObj } from '@storybook/nextjs'
import { Card } from '..'
import { textSizeMap } from '../Card'

import AgileImage from '@/assets/images/agile-methodology.jpg'
import { sizeMapKeys } from '../../_utils/variants'

const textSizeKeys = Object.keys(textSizeMap)

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['dev'],
  parameters: {
    actions: { disable: true },
    deepControls: {
      enabled: true,
    },
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    description: {
      control: 'text',
      description: 'Description text of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    thumbnail: {
      control: 'select',
      options: [undefined, AgileImage],
      description: 'Image to display as a thumbnail',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'string' },
      },
    },
    roundedSize: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Corner rounding of the card and thumbnail',
      table: {
        type: { summary: 'sm | md | lg | xl' },
        defaultValue: { summary: 'lg' },
      },
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Padding size within the card',
      table: {
        type: { summary: 'sm | md | lg | xl' },
        defaultValue: { summary: 'lg' },
      },
    },
    link: {
      control: 'text',
      description: 'Link URL for the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    metaItems: {
      control: 'object',
      description: 'Array of meta items to display',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    footerActionLabel: {
      control: 'text',
      description: 'Label for the footer action',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    'textSize.title': {
      control: 'select',
      options: textSizeKeys,
      description: 'Text size for the title',
      table: {
        type: { summary: textSizeKeys.join(' | ') },
        defaultValue: { summary: 'xl' },
      },
    },
    'textSize.description': {
      control: 'select',
      options: textSizeKeys,
      description: 'Text size for the description',
      table: {
        type: { summary: textSizeKeys.join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
    'textSize.footerAction': {
      control: 'select',
      options: textSizeKeys,
      description: 'Text size for the footer action',
      table: {
        type: { summary: textSizeKeys.join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
    'badge.label': {
      control: 'text',
      description: 'Label for the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    'badge.size': {
      control: 'select',
      options: sizeMapKeys,
      description: 'Size of the badge',
      table: {
        type: { summary: sizeMapKeys.join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
  },
  args: {
    title: 'Project Report',
    description: 'View all your KPIs and team metrics in one place.',
    roundedSize: 'lg',
    padding: 'lg',
    className: 'gradient-pink',
    link: 'https://google.com',
    thumbnail: undefined,
    metaItems: [],
    footerActionLabel: '',
    'textSize.title': 'xl',
    'textSize.description': 'md',
    'textSize.footerAction': 'md',
    'badge.label': '',
    'badge.size': 'md',
  },
}

export default meta

type Story = StoryObj<typeof Card>

export const WithImage: Story = {
  render: args => <Card {...args} />,
  args: {
    thumbnail: AgileImage,
    description: 'Real-time metrics with a clear layout.',
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
    title: undefined,
    description: undefined,
    roundedSize: 'lg',
    padding: 'lg',
  },
}

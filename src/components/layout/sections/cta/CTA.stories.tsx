import type { Meta, StoryObj } from '@storybook/react'
import { CTA } from './CTA'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const meta: Meta<typeof CTA> = {
  component: CTA,
  title: 'Layout/Sections/CTA',
  tags: ['autodocs'],
  args: {
    title: 'Learn how partners use our product',
    label: 'Explore features',
    link: '/features',
    badgeText: 'New',
    badgeVariant: 'light',
    badgeSize: 'xs',
    spacing: 'sm',
    variant: 'default',
  },
}

export default meta

type Story = StoryObj<typeof CTA>

export const Vertical: Story = {}

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
  },
}

export const Centered: Story = {
  args: {
    layout: 'centered',
    className: 'text-center',
  },
}

export const Inline: Story = {
  args: {
    layout: 'inline',
  },
}

export const Minimal: Story = {
  args: {
    layout: 'minimal',
    badgeText: undefined,
  },
}

export const WithImage: Story = {
  args: {
    layout: 'media-left',
    media: (
      <Image
        src="https://placehold.co/80x80"
        width={80}
        height={80}
        alt="Preview"
        className="rounded-md"
      />
    ),
  },
}

export const WithButton: Story = {
  args: {
    layout: 'horizontal',
    link: '',
    label: '',
    action: <Button size="sm">Get Started</Button>,
  },
}

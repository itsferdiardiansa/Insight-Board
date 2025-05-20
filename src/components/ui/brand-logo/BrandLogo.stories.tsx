import type { Meta, StoryObj } from '@storybook/react'
import { BrandLogo } from '.'

const meta: Meta<typeof BrandLogo> = {
  title: 'UI/BrandLogo',
  component: BrandLogo,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BrandLogo>

export const Default: Story = {
  args: {},
}

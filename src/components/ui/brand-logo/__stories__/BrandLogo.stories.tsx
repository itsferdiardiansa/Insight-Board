import type { Meta, StoryObj } from '@storybook/nextjs'
import { BrandLogo } from '..'

const meta: Meta<typeof BrandLogo> = {
  title: 'UI/BrandLogo',
  component: BrandLogo,
  tags: ['dev'],
}

export default meta

type Story = StoryObj<typeof BrandLogo>

export const Default: Story = {
  args: {},
}

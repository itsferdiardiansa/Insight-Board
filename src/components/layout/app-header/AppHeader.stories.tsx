import type { Meta, StoryObj } from '@storybook/nextjs'
import { AppHeader } from '.'

const meta: Meta<typeof AppHeader> = {
  title: 'Layout/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'left',
  },
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof AppHeader>

export const Default: Story = {}

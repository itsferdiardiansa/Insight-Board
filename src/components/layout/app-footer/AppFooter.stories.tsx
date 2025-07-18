import type { Meta, StoryObj } from '@storybook/react'
import { AppFooter } from '.'

const meta: Meta<typeof AppFooter> = {
  title: 'Layout/AppFooter',
  component: AppFooter,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof AppFooter>

export const Default: Story = {}

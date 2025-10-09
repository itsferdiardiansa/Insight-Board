import type { Meta, StoryObj } from '@storybook/nextjs'
import { AppFooter } from '.'

const meta: Meta<typeof AppFooter> = {
  title: 'Layout/AppFooter',
  component: AppFooter,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof AppFooter>

export const Default: Story = {
  render: args => (
    <div className="min-w-7xl rounded-lg overflow-hidden">
      <AppFooter {...args} />
    </div>
  ),
}

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Drawer from '.' // Adjust the import path
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  argTypes: {
    open: {
      control: 'boolean',
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
    },
    fullScreen: {
      control: 'boolean',
    },
    onClose: { action: 'closed' },
  },
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  args: {
    open: false,
    position: 'bottom',
    fullScreen: false,
    duration: 600,
    title: 'Menu',
  },
  render: args => {
    const [open, setOpen] = useState(args.open)

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>

        <Drawer
          {...args}
          open={open}
          onClose={() => {
            setOpen(false)
          }}
        >
          <Drawer.Content>
            <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
          </Drawer.Content>
        </Drawer>
      </div>
    )
  },
}

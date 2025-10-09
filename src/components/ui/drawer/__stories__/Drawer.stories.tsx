import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import Drawer from '..'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['dev'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the drawer is open or closed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
      description: 'The position of the drawer on the screen',
      table: {
        type: { summary: 'left | right | top | bottom' },
        defaultValue: { summary: 'bottom' },
      },
    },
    fullScreen: {
      control: 'boolean',
      description: 'Determines if the drawer should take up the full screen',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    duration: {
      control: 'number',
      description: 'The duration of the drawer animation in milliseconds',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '600' },
      },
    },
    title: {
      control: 'text',
      description: 'The title of the drawer',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    children: {
      control: 'text',
      description: 'Content to be rendered inside the drawer',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Drawer Content' },
      },
    },
  },
  args: {
    open: false,
    position: 'bottom',
    fullScreen: false,
    duration: 600,
    title: 'Menu',
    children: '<h1 className="text-heading-lg mb-space-md">Drawer Content</h1>',
  },
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
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
            <div dangerouslySetInnerHTML={{ __html: args.children }} />
          </Drawer.Content>
        </Drawer>
      </div>
    )
  },
}

export const LeftPosition: Story = {
  render: args => {
    const [open, setOpen] = useState(args.open)
    const [position, setPosition] = useState<'left' | 'right'>('left')

    return (
      <div className="flex flex-col gap-space-sm [&>*]:self-start">
        <div className="flex items-center gap-space-sm">
          <Switch
            checked={position === 'left'}
            onChange={checked => setPosition(checked ? 'left' : 'right')}
            checkedChildren="Left"
            unCheckedChildren="Right"
          />

          <p>Change Position</p>
        </div>

        <Button onClick={() => setOpen(true)}>Open Drawer</Button>

        <Drawer
          {...args}
          position={position}
          open={open}
          onClose={() => {
            setOpen(false)
          }}
        >
          <Drawer.Content>
            <div dangerouslySetInnerHTML={{ __html: args.children }} />
          </Drawer.Content>
        </Drawer>
      </div>
    )
  },
}

export const FullScreen: Story = {
  render: args => {
    const [open, setOpen] = useState(args.open)

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer
          {...args}
          fullScreen
          open={open}
          onClose={() => {
            setOpen(false)
          }}
        >
          <Drawer.Content>
            <div dangerouslySetInnerHTML={{ __html: args.children }} />
          </Drawer.Content>
        </Drawer>
      </div>
    )
  },
}

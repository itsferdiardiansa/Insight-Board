import type { Meta, StoryObj } from '@storybook/nextjs'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { HiXMark } from 'react-icons/hi2'
import { Switch } from '..'

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['dev'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    autoFocus: {
      control: 'boolean',
      description: 'Whether get focus when component mounted',
      table: { defaultValue: { summary: 'false' } },
    },
    checked: {
      control: 'boolean',
      description: 'Determine whether the Switch is checked',
      table: { defaultValue: { summary: 'false' } },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable switch',
      table: { defaultValue: { summary: 'false' } },
    },
    checkedChildren: {
      control: 'text',
      description: 'The content to be shown when the state is checked',
    },
    unCheckedChildren: {
      control: 'text',
      description: 'The content to be shown when the state is unchecked',
    },
    onChange: {
      action: 'changed',
      description: 'Trigger when the checked state is changing',
    },
    onClick: {
      action: 'clicked',
      description: 'Trigger when clicked',
    },
    className: {
      control: 'text',
      description: 'Additional className applied to root element',
    },
  },
  args: {
    checked: false,
    disabled: false,
    checkedChildren: <FaCheck />,
    unCheckedChildren: <HiXMark />,
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    const handleChange = (nextChecked: boolean) => {
      setChecked(nextChecked)
    }
    return <Switch checked={checked} onChange={handleChange} />
  },
}

export const Playground: Story = {
  render: args => <Switch {...args} />,
}

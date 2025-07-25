import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Button } from '@/components/ui/button'
import { variantMapKeys } from '../_utils/variants'

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: variantMapKeys,
    },
  },
}
export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    message: 'This is an alert',
    description: 'Here is the description text for the alert.',
    showIcon: true,
    icon: <AiOutlineInfoCircle />,
    closable: true,
    variant: 'primary',
  },
}

export const WithAction: Story = {
  args: {
    message: 'Action Alert',
    description: 'This alert includes an action button.',
    showIcon: true,
    icon: <AiOutlineInfoCircle />,
    closable: true,
    action: (
      <Button variant="secondary" size="sm">
        Retry
      </Button>
    ),
    variant: 'secondary',
  },
}

export const Banner: Story = {
  args: {
    message: 'Banner Alert',
    banner: true,
    closable: true,
    variant: 'outlinePrimary',
  },
}

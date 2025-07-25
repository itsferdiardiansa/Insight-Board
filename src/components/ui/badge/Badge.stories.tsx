import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '.'
import { FiUser, FiArrowRight } from 'react-icons/fi'
import { roundedMapKeys, sizeMapKeys, variantMapKeys } from '../_utils/variants'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: variantMapKeys,
    },
    size: {
      control: { type: 'radio' },
      options: sizeMapKeys,
    },
    rounded: {
      control: { type: 'radio' },
      options: roundedMapKeys,
      description:
        'Set the minimal corner to <code>sm</code>, <code>md></code> or make it ellipse or circle with <code>full</code>',
    },
    icon: {
      control: { type: 'select' },
      options: ['none', 'user', 'arrow'],
      description: 'Use <code>react-icons</code> as a based lib',
      mapping: {
        none: null,
        user: <FiUser />,
        arrow: <FiArrowRight />,
      },
      labels: {
        none: 'None',
        user: 'User Icon',
        arrow: 'Arrow Right Icon',
      },
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Customize icon position',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Feature',
  },
}

export default meta

export const Playground: StoryObj<typeof Badge> = {}

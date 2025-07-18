import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { Banner, type BannerProps } from './Banner'
import { GiCardboardBoxClosed } from 'react-icons/gi'

import ClientDashboardIllustration from '@/assets/illustrations/client-dashboard.png'

const demoCtas: BannerProps['ctas'] = [
  {
    variant: 'primary',
    children: 'Request Demo', // label text
  },
  {
    variant: 'outlineSecondary',
    children: 'Learn More',
  },
]

const defaultHeader: BannerProps['header'] = {
  title: 'Unleash insights without boundaries',
  subtitle: 'Collaborate in real time and access your data anywhere.',
  textAlign: 'center',
  titleClassName: 'font-black! text-4xl sm:text-6xl md:text-9xl!',
  subTitleClassName: 'md:text-3xl!',
  badgeLabel: 'Features',
  badgeIcon: <GiCardboardBoxClosed />,
}

const meta: Meta<typeof Banner> = {
  title: 'Layout/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    header: { control: 'object' },
    ctas: { control: 'object' },
    image: { control: 'object' },
  },
  args: {
    header: defaultHeader,
    ctas: demoCtas,
  },
}
export default meta

type Story = StoryObj<typeof Banner>

export const PropDriven: Story = {
  name: 'Prop-Driven',
  render: args => (
    <div className="layout-wrapper">
      <Banner
        {...args}
        header={args.header}
        ctas={args.ctas}
        image={{
          imageSrc: ClientDashboardIllustration,
          metaDescription: 'Dashboard Feature',
          ...(args.image ?? {}),
        }}
      />
    </div>
  ),
}

export const Minimal: Story = {
  name: 'Minimal Header Only',
  args: {
    header: {
      title: 'Welcome to InsightBoard',
      subtitle: 'Unified analytics. Real-time answers.',
      textAlign: 'center',
    },
    ctas: undefined,
    image: undefined,
  },
  render: ({ header }) => <Banner header={header} />,
}

export const CustomChildrenOnly: Story = {
  args: {
    ctas: undefined,
  },
  render: () => (
    <Banner>
      <Banner.Content>
        <div className="text-center mx-auto">
          <h1 className="heading-display font-bold text-neutral-100">
            Build Data Flows Faster
          </h1>
          <p className="mt-4 heading-sub">
            Connect sources, automate reports, and act on live metrics.
          </p>
        </div>
      </Banner.Content>
      <Banner.Image>
        <div className="mx-(--space-lg) bg-(--primary) h-48 rounded-xl flex items-center justify-center">
          <span className="text-neutral-100 font-bold">Image Slot</span>
        </div>
      </Banner.Image>
    </Banner>
  ),
}

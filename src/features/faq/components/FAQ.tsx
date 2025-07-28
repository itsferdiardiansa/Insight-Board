import { SectionHeader, SectionShell } from '@/components/layout/sections'
import { FaSpeakap } from 'react-icons/fa'
import { FAQList } from './FAQList'

type FAQProps = {
  title: string
  subtitle: string
}

export const FAQ: React.FC<FAQProps> = ({ title, subtitle }) => {
  return (
    <SectionShell direction={'col'}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        badgeLabel="FAQs"
        badgeVariant="secondary"
        badgeIcon={<FaSpeakap />}
        textAlign={'center'}
      />

      <div>
        <FAQList />
      </div>
    </SectionShell>
  )
}

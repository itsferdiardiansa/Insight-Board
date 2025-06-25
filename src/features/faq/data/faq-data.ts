export type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What is InsightBoard and how does it help my team?',
    answer:
      'InsightBoard is a real-time analytics and collaboration platform that helps teams gain insights, automate workflows, and integrate with their favorite tools.',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      "Yes, InsightBoard offers a 14-day free trial with access to all core features so you can explore how it fits your team's needs.",
  },
  {
    question: 'Can I integrate InsightBoard with other platforms?',
    answer:
      'Absolutely! We support 850+ integrations including Slack, Notion, Google Analytics, Stripe, and more.',
  },
  {
    question: 'Is my data secure with InsightBoard?',
    answer:
      'Yes. InsightBoard uses enterprise-grade encryption, SSO support, and role-based access control to keep your data safe.',
  },
  {
    question:
      'What’s the difference between the Starter, Professional, and Enterprise plans?',
    answer:
      'Each plan offers progressively advanced features—from basic dashboards in Starter to custom reporting, collaboration, and security in Enterprise.',
  },
  {
    question: 'Can I change or cancel my plan at any time?',
    answer:
      'Yes, you can upgrade, downgrade, or cancel your subscription anytime directly from your dashboard.',
  },
]

export default faqData

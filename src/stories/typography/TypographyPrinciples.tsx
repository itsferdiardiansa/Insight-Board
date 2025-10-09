const principles = [
  {
    thumb: '/assets/readability.jpg',
    title: 'Prioritize Readability',
    description:
      'Present content in a way that\'s easy to scan, understand, and enjoy — ensuring accessibility for all users.',
  },
  {
    thumb: '/assets/visual-harmony.jpg',
    title: 'Maintain Visual Harmony',
    description:
      'Keep typography consistent and well-balanced. Apply hierarchy, spacing, and alignment to make complex information feel simple.',
  },
  {
    thumb: '/assets/contextualize.jpg',
    title: 'Design with Context in Mind',
    description:
      'Adapt typography to different devices, environments, and user preferences, ensuring information remains clear and relevant.',
  },
]

export const TypographyPrinciples = () => (
  <div className="grid grid-cols-3 gap-space-md">
    {principles.map((principle, index) => (
      <div key={index} className="flex flex-col">
        <div className="rounded-lg overflow-hidden">
          <img
            className="h-full aspect-[16/9] object-cover"
            src={principle.thumb}
            alt={principle.title}
          />
        </div>

        <div className="flex flex-col py-space-md">
          <h4 className="text-heading-4 font-semibold">{principle.title}</h4>
          <p className="m-0! text-body-md">{principle.description}</p>
        </div>
      </div>
    ))}
  </div>
)


const foundationGuidelines = [
  {
    thumb: '/assets/color-illustration.jpg',
    title: 'Color',
    link: '/?path=/docs/foundations-colors--docs',
    description:
      'Define and apply a consistent color system to convey meaning, ensure accessibility, and maintain visual harmony across the product.',
  },
  {
    thumb: '/assets/typography-illustration.jpg',
    title: 'Typography',
    link: '/?path=/docs/foundations-typography--docs',
    description:
      'Use a clear and scalable typographic system to establish hierarchy, improve readability, and create a balanced user experience.',
  },
  {
    thumb: '/assets/spacing-illustration.jpg',
    title: 'Spacing',
    link: '/?path=/docs/foundations-spacing--docs',
    description:
      'Apply spacing tokens to structure layouts, create rhythm, and ensure alignment that adapts well across devices and screen sizes.',
  },
]

export const FoundationalGuidelines = () => (
  <div className="grid grid-cols-3 gap-space-md">
    {foundationGuidelines.map((principle, index) => (
      <a key={index} href={principle.link} className="flex flex-col">
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
      </a>
    ))}
  </div>
)

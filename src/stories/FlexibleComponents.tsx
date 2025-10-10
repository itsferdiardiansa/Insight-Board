const flexibleComponents = [
  {
    thumb: '/assets/button-illustration.jpg',
    title: 'Button',
    link: '/?path=/docs/ui-button--docs',
    description:
      'Buttons trigger key actions and guide users through flows. They should be clear, accessible, and visually distinct based on priority.',
  },
  {
    thumb: '/assets/card-illustration.png',
    title: 'Card',
    link: '/?path=/docs/ui-card--docs',
    description:
      'Cards are flexible containers used to group related information. They provide hierarchy, structure, and clear entry points for interaction.',
  },
  {
    thumb: '/assets/form-illustration.jpg',
    title: 'Form',
    link: '/?path=/docs/ui-form-input--docs',
    description:
      'Forms collect and validate user input. They must be intuitive, efficient, and consistent while ensuring accessibility and usability.',
  },
]

export const FlexibleComponents = () => (
  <div className="grid grid-cols-3 gap-space-md">
    {flexibleComponents.map((principle, index) => (
      <a key={index} href={principle.link} className="flex flex-col">
        <div className="rounded-lg overflow-hidden">
          <img
            className="h-full aspect-[16/9] object-contain"
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

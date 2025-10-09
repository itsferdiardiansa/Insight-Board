export const LayoutSpacing = () => (
  <div className="mt-space-md! grid grid-cols-2 items-stretch gap-space-lg">
    <div className="flex flex-col gap-space-md">
      <div className="aspect-[16/9] rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/assets/component-spacing.png"
          alt="Component spacing example"
        />
      </div>

      <div className="flex-1 flex flex-col gap-space-sm">
        <h1 className="m-0! text-lg!">Component-Level Spacing</h1>
        <p className="m-0!">
          Ideal for arranging buttons, form elements, and small interactive
          parts inside a component while keeping them visually connected.
          <br />
          <br />
          Use tokens between <code>gap-space-sm</code> and{' '}
          <code>gap-space-xs</code> for tight, efficient layouts.
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-space-md">
      <div className="aspect-[16/9] rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/assets/article-spacing.png"
          alt="Article spacing example"
        />
      </div>

      <div className="flex-1 flex flex-col gap-space-sm">
        <h1 className="m-0! text-lg!">Article & Content Spacing</h1>
        <p className="m-0!">
          Best for separating text blocks, headings, and media in long-form
          content.
          <br />
          <br />
          Maintain readability with generous gaps from <code>
            gap-space-md
          </code>{' '}
          up to <code>gap-space-lg</code>.
        </p>
      </div>
    </div>
  </div>
)

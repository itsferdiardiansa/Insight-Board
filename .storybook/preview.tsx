import type { Preview } from '@storybook/react-webpack5'
import { DocsContainer } from "@storybook/addon-docs/blocks"

import '../src/styles/globals.css'
import '../src/styles/prose.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      sort: "alpha",
      expanded: true
    },
    options: {
      showPanel: true,
      panelPosition: "bottom",
      bottomPanelHeight: 300,
      storySort: {
        order: [
          "Overview",
          "Foundations",
          "Layout",
          "Section",
          "Features", 
          "UI" 
        ],
      },
    },
    docs: {
      container: ({ children, context }) => {
        const stories = context?.componentStories?.() ?? []
        const storyTitle = stories[0]?.title ?? ""
        const isFoundations = storyTitle.startsWith("Foundations")

        return (
          <div className={isFoundations ? "w-full" : "max-w-7xl mx-auto"}>
            <DocsContainer context={context}>
              {children}
            </DocsContainer>
          </div>
        )
      }
    }
  }
}

export default preview;
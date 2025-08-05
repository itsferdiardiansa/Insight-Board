import type { Preview } from '@storybook/react'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    options: {
      showPanel: true,
      panelPosition: "right",
      bottomPanelHeight: 300,
      storySort: {
        order: [
          "Design Tokens",
          "Layout", 
          "Section", 
          "UI" 
        ],
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  }
}

export default preview;
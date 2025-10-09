import { addons } from 'storybook/manager-api'
import uiTheme from './ui-theme'
import "./manager.css"

addons.setConfig({
  theme: uiTheme,
  showNav: true,
  showPanel: true,
  toolbar: {
    fullscreen: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    'storybook/docs/panel': { hidden: false },
  },
});
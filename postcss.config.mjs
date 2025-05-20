import autoprefixer from "autoprefixer";
import tailwindcss from '@tailwindcss/postcss'

let plugins = []

if (['ui:dev', 'ui:build'].includes(process.env.npm_lifecycle_event)) {
  plugins.push(autoprefixer(), tailwindcss())
} else {
  plugins.push("@tailwindcss/postcss")
}

const config = {
  plugins,
};

export default config;

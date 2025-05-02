/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')
 
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`
 
module.exports = {
  'src/**/*.{ts,tsx}': () => 'pnpm run type-check',
  '*.{mjs,js,ts,tsx}': () => 'pnpm run lint',
}
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')
 
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`
 
module.exports = {
  'src/**/*.{ts,tsx}': () => ['pnpm type-check', 'pnpm test'],
  '*.{mjs,js,ts,tsx}': () => 'pnpm lint',
}
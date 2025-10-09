import type { StorybookConfig } from '@storybook/nextjs'
import remarkGfm from "remark-gfm"

const config: StorybookConfig = {
  stories: [
    "../@(src|docs)/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    // {
    //   name: "@storybook/addon-essentials",
    //   options: {
    //     docs: false
    //   }
    // }, 
    // "@storybook/addon-actions", 
    // "@storybook/addon-interactions", 
    "@storybook/addon-webpack5-compiler-swc",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    }
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  staticDirs: [
    "../public",
    {
      from: "../src/assets/docs", to: "/assets"
    }
  ],
  webpackFinal: async (config) => {
    config.module = config.module || {}
    config.module.rules = config.module.rules || []
 
    const imageRule = config.module.rules.find((rule) => rule?.['test']?.test('.svg'))
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/
    }
    
    // Configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
 
    return config
  }
}
export default config
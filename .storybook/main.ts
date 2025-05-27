import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    "../@(src|docs)/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false
      }
    }, 
    "@storybook/addon-docs", 
    "@storybook/addon-actions", 
    "@storybook/addon-onboarding", 
    // "@storybook/addon-interactions", 
    "@storybook/addon-webpack5-compiler-swc"
  ],
  framework: {
    "name": "@storybook/nextjs",
    "options": {}
  },
  staticDirs: [
    "../public"
  ],
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
 
    const imageRule = config.module.rules.find((rule) => rule?.['test']?.test('.svg'));
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/;
    }
 
    // Configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {},
        },
      ],
    })
 
    return config;
  }
};
export default config;
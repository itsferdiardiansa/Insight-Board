import type { NextConfig } from "next"
import type { RuleSetRule } from 'webpack'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [],
    formats: ['image/webp']
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: RuleSetRule) =>
      rule?.test instanceof RegExp && rule.test.test('.svg')
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },

      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  { name: 'removeViewBox', active: false },
                  // { removeViewBox: false } // Keep viewBox
                ]
              }
            }
          }
        ],
      }
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

export default nextConfig
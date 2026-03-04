import type { NextConfig } from 'next'
import nextra from 'nextra'
import path from 'path'

const withNextra = nextra({})

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx',
      '@components': './components',
    },
  },
  webpack(config) {
    config.resolve.alias ??= {}
    config.resolve.alias['@components'] = path.join(process.cwd(), 'components')
    return config
  },
}

export default withNextra(nextConfig)

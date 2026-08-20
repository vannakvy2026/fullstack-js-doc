import nextra from 'nextra'

const withNextra = nextra({
  // Nextra options can be defined here, e.g. search or latex
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './src/mdx-components.tsx',
    },
  },
}

export default withNextra(nextConfig)

import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const themeComponents = getThemeComponents()
  return {
    ...themeComponents,
    ...components,
  }
}

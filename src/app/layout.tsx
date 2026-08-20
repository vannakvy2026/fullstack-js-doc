import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s - Fullstack JS Docs',
    default: 'Fullstack JS Documentation',
  },
  description: 'A beautiful documentation site built with Next.js 16 and Nextra 4',
  applicationName: 'Fullstack JS Docs',
  generator: 'Next.js 16 & Nextra 4',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <Head />
      <body>
        <Layout
          pageMap={pageMap}
          navbar={
            <Navbar
              logo={
                <div className="flex items-center gap-2 font-bold text-lg select-none">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2 py-0.5 rounded text-xs tracking-wider">JS</span>
                  <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">Fullstack Doc</span>
                </div>
              }
              projectLink="https://github.com/vannakvy2026/fullstack-js-doc"
            />
          }
          footer={
            <Footer className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500">
              <span>Built with Nextra v4 & Next.js 16 © {new Date().getFullYear()}</span>
              <span className="flex gap-4">
                <a href="/docs/getting-started" className="hover:underline">Quick Start</a>
                <a href="https://github.com/vannakvy2026/fullstack-js-doc" className="hover:underline">GitHub</a>
              </span>
            </Footer>
          }
          docsRepositoryBase="https://github.com/vannakvy2026/fullstack-js-doc/tree/main"
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

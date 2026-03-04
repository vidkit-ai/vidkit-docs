import type { ReactNode } from 'react'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Vidkit Docs',
  description: 'Vidkit documentation',
}

const banner = (
  <Banner storageKey="vidkit-docs-banner">
    Welcome to Vidkit Docs
  </Banner>
)
const navbar = <Navbar logo={<b>Vidkit</b>} />
const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © Vidkit.
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/vidkit-ai/vidkit-docs/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

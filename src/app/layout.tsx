import { Metadata, Viewport } from 'next'



import './global.css'
import Providers from './providers'
import { aventa, inter } from '@design-system-ui/theme/fonts'

const title = 'Impulse - A growth OS for startups'
const description =
  "A data-driven CRM that's truly yours. Powered by GPT-4, Impulse helps teams make intelligent decisions and keep a single source of truth for all your client interaction and insights."

export const metadata: Metadata = {
  keywords: [
    'Impulse',
    'Impulse HQ',
    'Impulse CRM',
    'CRM',
    'Customer Relationship Management',
    'Sales',
    'Sales Prospecting',
    'Company Enrichment',
    'Impulse Data Enrichment'
  ],
  description:
    "A data-driven CRM that's truly yours. Powered by GPT-4, Impulse helps teams make intelligent decisions and keep a single source of truth for all your client interaction and insights.",
  icons: {
    icon: '/images/logo/logomark.svg'
  },
  openGraph: {
    title,
    description,
    url: 'https://impulsecrm.io',
    siteName: 'Impulse',
    images: [
      {
        url: 'https://res.cloudinary.com/drscn1tsw/image/upload/v1689686702/logo/GRADIENT_LOGOMARK_jtn414.png',
        width: 1000,
        height: 760
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@aneriemmanuel'
  },
  metadataBase: new URL('https://impulsecrm.io'),
  robots: {
    index: false,
    follow: false
  }
}

export const viewport: Viewport = {
  themeColor: '#04020C'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${aventa.variable} ${aventa.className} ${inter.variable} ${inter.className}`}
      suppressHydrationWarning
    >
      <head />
      <body>
        <Providers>
          <main id="root">{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

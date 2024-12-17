import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

export const aventa = localFont({
  variable: '--font-aventa',
  display: 'swap',
  src: [
    {
      path: './fonts/aventa-black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './fonts/aventa-extrabold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './fonts/aventa-bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/aventa-semibold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/aventa-medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/aventa-regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/aventa-light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/aventa-extralight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/aventa-thin.ttf',
      weight: '100',
      style: 'normal'
    }
  ]
})

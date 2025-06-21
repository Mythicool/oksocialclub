import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Doing OK - Oklahoma Social Club',
  description: 'The premier social dining experience in Oklahoma. Great food, great people, great times.',
  keywords: 'Oklahoma, social club, dining, events, food, community',
  authors: [{ name: 'Doing OK Social Club' }],
  openGraph: {
    title: 'Doing OK - Oklahoma Social Club',
    description: 'The premier social dining experience in Oklahoma. Great food, great people, great times.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doing OK - Oklahoma Social Club',
    description: 'The premier social dining experience in Oklahoma. Great food, great people, great times.',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

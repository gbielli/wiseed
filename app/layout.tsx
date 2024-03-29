import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import localFont from 'next/font/local';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

const telegraf = localFont({
  src: [
    {
      path:'../public/fonts/PPTelegraf-Regular.otf',
    },
    {
      path: '../public/fonts/PPTelegraf-Ultralight.otf',
      weight: '300',
    },
  ],
  variable: '--font-telegraf'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${telegraf.variable}`}>
      <body>
        {children}
      <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

import { Header } from '@/components/layout'

export const metadata: Metadata = {
  title: '2024청신호 관리',
  description: '청소년2부 신약일독 관리자 프로그램',
  icons: [
    {
      url: '/image/192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/image/256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      url: '/image/512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      url: '/icon/favicon.ico',
      type: 'image/x-icon',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" href="/image/192.png" />
      <link rel="apple-touch-icon" href="/image/512.png" />
      <body className="min-h-screen w-full p-4">
        <Header />
        {children}
      </body>
    </html>
  )
}

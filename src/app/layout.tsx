import type { Metadata } from 'next'
import './globals.css'

import { Header, Sidebar } from '@/components/layout'

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
      <body className="flex min-h-screen w-full flex-col gap-y-2 p-4">
        <Header />
        {/* Sidebar */}
        <div className="flex flex-grow gap-x-2">
          <Sidebar />
          <div className="bg-gl-green-opacity-40 flex-grow rounded-2xl p-3">{children}</div>
        </div>
      </body>
    </html>
  )
}

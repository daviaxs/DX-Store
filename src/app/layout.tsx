import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { AuthProvider } from '@/providers/auth'
import { Footer } from '@/shared/components/Footer/Footer'
import { Header } from '@/shared/components/header/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DX Store',
  description: 'DX Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}

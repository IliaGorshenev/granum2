import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Гранум - Изделия из натурального камня',
  description: 'Премиальные решения с камнем - создайте пространство, которое восхищает',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

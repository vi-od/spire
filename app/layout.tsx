import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
  title: 'SPIRE - File System',
  description: 'A simple file system interface for browsing learning resources.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white font-mono text-sm">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen bg-white dark:bg-gray-900">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 
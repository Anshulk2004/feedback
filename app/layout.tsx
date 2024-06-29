import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import ThemeChange from './components/ThemeChange'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Peer Feedback Analysis App | Revolutionize Your Feedback Process',
  description: 'Transform your company\'s peer feedback process with our innovative analysis app. Collect and analyze feedback efficiently for a healthier work environment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class'>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <header className='p-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Feedback App</h1>
            <ThemeChange/>  
          </header>
          {children}
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
// import ThemeSwitch from './components/Theme'
import SideNav from './components/SideNav'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Feedback Analysis App',
  description: 'Trying a different layout for better feedbacks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider attribute="class">
          <div className={`${inter.className} dark:bg-gray-900 dark:text-white flex flex-col min-h-screen`}>
            <Navbar />
            <main className="flex-1 p-4">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
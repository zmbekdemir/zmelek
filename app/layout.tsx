import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Footer from './components/Footer'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zeliha Melek Bekdemir',
  description: 'Personal portfolio website of Zeliha Melek Bekdemir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={spaceGrotesk.className}>
        <div className="menu-container">
          <div className="menu-trigger">☰</div>
          <nav className="menu-content">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
          </nav>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: "400", 
  subsets: ['latin'],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: 'Lets Play With Colors!',
  description: 'Color Education Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}

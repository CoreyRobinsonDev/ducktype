import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "ducktype",
  description: "Welcome to ducktype – Your Ultimate Typing Playground for Programmers! ducktype is not just a typing practice site; it's a dynamic platform designed exclusively for programmers seeking to enhance their coding speed and accuracy. I understand that typing proficiency is a crucial skill for developers, and that's why I've tailored this platform to meet the unique needs of coding enthusiasts like you!"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </head>
            <body className={inter.className}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}

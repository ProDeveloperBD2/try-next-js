
import { Gabarito } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const gabarito = Gabarito({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Next Hero',
  description: 'Next Hero',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        {children}
      </body>
    </html>
  )
}

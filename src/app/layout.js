
import { Black_Ops_One } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const black_ops_one = Black_Ops_One({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Next Hero',
  description: 'Next Hero',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={black_ops_one.className}>
        {children}
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './style.css'
const inter = Inter({ subsets: ['latin'] })

import Navbar from './components/Navbar'

export const metadata = {
  title: 'Angel Robles - Portfolio',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id='root' className={inter.className}>
        {children}
      </body>
    </html>
  )
}

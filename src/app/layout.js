import Navbar from '@/components/Navbar'
// import './globals.css'
import '../styles/global.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Artyfact',
  description: 'Generated by Artyfact',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <body className={inter.className}>
              <Navbar />
              {children}</body>
          </html>
          )
}

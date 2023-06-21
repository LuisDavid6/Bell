import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bell´s',
  description: 'Bell´s Food',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}

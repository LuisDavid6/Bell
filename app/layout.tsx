import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './provider'
import { ThemeProvider } from '@/components/ThemeProvider'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bell´s Food',
  description: 'Bell´s Food',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={`${inter.className} dark:bg-gradient-to-r dark:from-black dark:via-neutral-800 dark:to-neutral-900 dark:text-white`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <NextAuthProvider>
            <div className='min-h-screen'>{children}</div>
            <div>
              <Footer />
            </div>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

'use client'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'

type Props = {
  children?: React.ReactNode
}

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ToastContainer />
      {children}
    </SessionProvider>
  )
}

import React from 'react'
import { getSession } from '@/lib/getSession'
import { getUserCart } from '@/lib/queries'
import NavBar from '@/components/NavBar'

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession()
  const userCart = await getUserCart(session?.user?.email || '')

  return (
    <div>
      <NavBar session={session ? true : false} userCart={userCart} />
      {children}
    </div>
  )
}

export default layout

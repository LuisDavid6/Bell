import NavBar from '@/components/NavBar'
import { getSession } from '@/lib/getSession'
import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession()
  return (
    <div>
      <NavBar session={session ? true : false} />
      {children}
    </div>
  )
}

export default layout

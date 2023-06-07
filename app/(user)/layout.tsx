import React from 'react'
import { getSession } from '@/lib/getSession'
import NavBar from '@/components/NavBar'

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession()

  return (
    <div>
      <NavBar email={session?.user?.email || ''} />
      {children}
    </div>
  )
}

export default layout

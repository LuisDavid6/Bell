import React from 'react'
import { getUserByEmail } from '@/lib/queries'
import { getSession } from '@/lib/getSession'
import EditUser from '../components/EditUser'

const Edit = async () => {
  const session = await getSession()
  const user = await getUserByEmail(session?.user?.email || '')

  return (
    <div>
      <EditUser
        info={{
          username: user.username,
          email: user.email,
          tel: user.tel,
          address: user.address,
          avatar: user.avatar,
        }}
      />
    </div>
  )
}

export default Edit

import axios from 'axios'
import { getSession } from 'next-auth/react'

interface CompanyData {
  name?: string
  tel?: string
  address?: string
  horary?: string
  shipping?: number
}

const useUpdateInfo = async (id: string, data: CompanyData) => {
  try {
    const URL = process.env.NEXT_PUBLIC_URL
    const session = await getSession()

    const response = await axios.patch(`${URL}/companies/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${session?.user.token}`,
      },
    })

    return response.data
  } catch (error) {
    return error
  }
}

export default useUpdateInfo

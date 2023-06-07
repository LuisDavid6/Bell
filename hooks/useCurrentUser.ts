import useSwr from 'swr'
import fetcher from '@/lib/fetcher'

const URL = process.env.NEXT_PUBLIC_URL

const useCurrentUser = (email: string) => {
  const { data, error, isLoading, mutate } = useSwr(`${URL}/users/userInfo/${email}`, fetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}

export default useCurrentUser

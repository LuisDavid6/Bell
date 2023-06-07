import useSwr from 'swr'
import fetcher from '@/lib/fetcher'

const URL = process.env.NEXT_PUBLIC_URL

const useGetCart = (email: string) => {
  const { data, error, isLoading, mutate } = useSwr(`${URL}/users/userCart/${email}`, fetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}

export default useGetCart

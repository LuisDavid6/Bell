import { User } from '@/types'
import { create } from 'zustand'

interface Store {
  user?: User
  setUser: (user: User) => void
}

const useStore = create<Store>((set) => ({
  user: undefined,
  setUser: (userInfo: User) => set({ user: userInfo }),
}))

export default useStore

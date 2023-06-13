import { getSession } from '@/lib/getSession'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getSession()

  if (session?.user.role === 'admin') {
    redirect('/admin')
  } else if (session?.user.role === 'company') {
    redirect('/dashboard')
  } else redirect('/home')

  return <main className='min-h-screen'></main>
}

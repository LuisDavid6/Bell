import { redirect } from 'next/navigation'

export default async function Home() {
  redirect('/home')
  return <main className='min-h-screen'></main>
}

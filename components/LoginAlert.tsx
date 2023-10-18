import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'

const Content = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <h4 className='font-bold'>Debes iniciar sesión o registrarte</h4>
      <section className='flex gap-2'>
        <Link href='/login'>
          <button className='bg-btn py-2 px-4 text-white text-sm rounded-lg hover:bg-btn2'>Ingresa</button>
        </Link>
        <Link href='/register'>
          <button className='bg-btn py-2 px-4 text-white text-sm rounded-lg hover:bg-btn2'>Registrate</button>
        </Link>
      </section>
    </div>
  )
}

export const loginAlert = () => {
  toast.warning(<Content />, {
    position: 'top-center',
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
    style: { backgroundColor: localStorage.getItem('theme') === 'light' ? '#fff2e5' : '#4C4A4A' },
  })
}

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const successAlert = (msj: string) => {
  toast.success(msj, {
    position: 'bottom-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
    style: { backgroundColor: localStorage.getItem('theme') === 'light' ? '#fff2e5' : '#4C4A4A' },
  })
}

export const errorAlert = (msj: string) => {
  toast.error(msj, {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
    style: { backgroundColor: localStorage.getItem('theme') === 'light' ? '#fff2e5' : '#4C4A4A' },
  })
}

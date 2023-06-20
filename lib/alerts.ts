import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const successAlert = (msj: string) => {
  toast.success(msj, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  })
}

export const errorAlert = (msj: string) => {
  toast.error(msj, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  })
}

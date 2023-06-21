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
    theme: 'light',
    style: { backgroundColor: '#fff2e5' },
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
    theme: 'light',
    style: { backgroundColor: '#fff2e5' },
  })
}

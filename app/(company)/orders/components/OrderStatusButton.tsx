'use client'
import useUpdateOrderStatus from '@/app/(company)/hooks/useUpdateOrderStatus'
import { errorAlert, successAlert } from '@/lib/alerts'
import { FC, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  status: string
  id: string
  closeModal: () => void
}

const OrderStatusButton: FC<Props> = ({ status, id, closeModal }) => {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const update = async () => {
    setLoading(true)

    const response = await useUpdateOrderStatus(id)

    if (response === 'success') successAlert('Estado del pedido actualizado')
    else errorAlert('Un error ha ocurrido')

    closeModal()
    router.refresh()

    setLoading(false)
  }
  return (
    <>
      {status === 'pending' ? (
        <button
          disabled={loading}
          onClick={update}
          className='bg-amber-500 hover:bg-amber-600 w-3/6 md:w-2/6 place-self-center py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed'
        >
          En preparación
        </button>
      ) : status === 'inProccess' ? (
        <button
          disabled={loading}
          onClick={update}
          className='bg-blue-500 hover:bg-blue-600 w-3/6 md:w-2/6 place-self-center py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Enviar
        </button>
      ) : status === 'shipping' ? (
        <button
          disabled={loading}
          onClick={update}
          className='bg-green-500 hover:bg-green-600 w-3/6 md:w-3/6 place-self-center py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Confirmar entrega
        </button>
      ) : null}
    </>
  )
}

export default OrderStatusButton

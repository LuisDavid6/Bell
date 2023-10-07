'use client'
import useUpdateOrderStatus from '@/app/(company)/hooks/useUpdateOrderStatus'
import { errorAlert, successAlert } from '@/lib/alerts'
import { FC } from 'react'

interface Props {
  status: string
  id: string
  closeModal: () => void
}

const OrderStatusButton: FC<Props> = ({ status, id, closeModal }) => {
  const update = async () => {
    const response = await useUpdateOrderStatus(id)

    if (response === 'success') successAlert('Estado del pedido actualizado')
    else errorAlert('Un error ha ocurrido')

    closeModal()
    window.location.reload()
  }
  return (
    <>
      {status === 'pending' ? (
        <button onClick={update} className='bg-amber-500 hover:bg-amber-600 w-3/6 md:w-2/6 place-self-center py-2 rounded-lg text-white'>
          En preparación
        </button>
      ) : status === 'inProccess' ? (
        <button onClick={update} className='bg-blue-500 hover:bg-blue-600 w-3/6 md:w-2/6 place-self-center py-2 rounded-lg text-white'>
          Enviar
        </button>
      ) : status === 'shipping' ? (
        <button onClick={update} className='bg-green-500 hover:bg-green-600 w-3/6 md:w-3/6 place-self-center py-2 rounded-lg text-white'>
          Confirmar entrega
        </button>
      ) : null}
    </>
  )
}

export default OrderStatusButton

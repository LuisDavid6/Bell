'use client'

import useNewOrder from '@/hooks/useNewOrder'
import { errorAlert, successAlert } from '@/lib/alerts'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const PaymentForm = ({ user }: { user: string }) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | undefined>(undefined)

  const stripe = useStripe()
  const elements = useElements()

  const router = useRouter()

  // if (stripe) stripe.retrievePaymentIntent(clientSecret).then((res) => console.log(res.paymentIntent))

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      // confirmParams: {
      //   // Make sure to change this to your payment completion page
      //   return_url: 'http://localhost:3000/profile/orders',
      // },
    })

    if (!error) {
      try {
        const response = await useNewOrder(user)

        if (response === 'success') {
          successAlert('pedido realizado')
          router.push('/profile/orders')
        } else errorAlert('un error ha ocurrido')
      } catch (error) {
        errorAlert('un error ha ocurrido')
      }
    }

    setLoading(false)

    if (error?.type === 'card_error' || error?.type === 'validation_error') setMessage(error.message)
  }

  return (
    <form id='payment-form' onSubmit={handleSubmit} className='flex flex-col justify-center'>
      <PaymentElement id='payment-element' options={{ layout: 'tabs', business: { name: 'Bell´s Food' } }} />
      <button
        disabled={loading || !stripe || !elements}
        type='submit'
        className='bg-btn mt-5 py-2 px-4 text-white rounded-md transition duration-500
                ease-in-out hover:scale-110 hover:bg-btn2 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Pagar
      </button>
      {message && <div className='mt-5 text-sm'>*{message}*</div>}
    </form>
  )
}

export default PaymentForm

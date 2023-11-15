'use client'

import { XMarkIcon } from '@heroicons/react/24/solid'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'
import { useEffect, useState } from 'react'
import { Cart } from '@/types'
import { errorAlert } from '@/lib/alerts'

const PaymentModal = ({ closeModal, cart }: { closeModal: () => void; cart: Cart }) => {
  const [clientSecret, setclientSecret] = useState('')

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '')

  useEffect(() => {
    fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ amount: cart.total + cart.company.shipping }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => setclientSecret(res.clientSecret))
      .catch((e) => errorAlert('un error ha ocurrido'))
  }, [])

  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 z-50 transition duration-300 flex justify-center items-center overflow-x-hidden overflow-y-auto'>
      <div className='bg-white dark:bg-bgDark relative drop-shadow-md rounded-lg p-10 my-1.5 '>
        <div onClick={() => closeModal()} className='absolute top-2 right-2 rounded-full p-2 bg-slate-100 dark:bg-gray-400 cursor-pointer'>
          <XMarkIcon className='text-black w-6' />
        </div>

        <div className='mt-5 min-w-[280px] min-h-[300px]'>
          {clientSecret && (
            <Elements
              options={{
                clientSecret,
                appearance: { theme: 'night', labels: 'floating', variables: { colorPrimary: '#F1550D' } },
              }}
              stripe={stripePromise}
            >
              <PaymentForm user={cart.user} />
            </Elements>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaymentModal

import Image from 'next/image'
import React from 'react'
import pending from '@/assets/images/pending.png'
import progress from '@/assets/images/progress.png'
import delivered from '@/assets/images/delivered.png'

const Orders = () => {
  return (
    <div className=''>
      <h3 className='text-lg font-bold mb-4'>Pedidos</h3>
      <div className='flex justify-around gap-3 mx-3'>
        <section className='flex flex-col items-center'>
          <Image src={pending} alt='pendientes' width={80} height={80} />
          <h4 className='font-bold'>Pendientes</h4>
          <h3 className='text-3xl font-bold text-title mt-2 '>3</h3>
        </section>
        <section className='flex flex-col items-center'>
          <Image src={progress} alt='en proceso' width={80} height={80} />
          <h4 className='font-bold'>En proceso</h4>
          <h3 className='text-3xl font-bold text-title mt-2 '>2</h3>
        </section>
        <section className='flex flex-col items-center'>
          <Image src={delivered} alt='entregados' width={80} height={80} />
          <h4 className='font-bold'>Entregados</h4>
          <h3 className='text-3xl font-bold text-title mt-2 '>8</h3>
        </section>
      </div>
    </div>
  )
}

export default Orders

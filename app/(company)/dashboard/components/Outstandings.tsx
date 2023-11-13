import { convertPrice } from '@/pipes/convertPrice.pipe'
import { Company } from '@/types'
import Image from 'next/image'
import ChangeOutstandingsButton from './ChangeOutstandingsButton'

const Outstandings = ({ company }: { company: Company }) => {
  return (
    <div className='border-2 border-title rounded-xl p-4 relative'>
      <h3 className='text-lg font-bold mb-4'>Destacados</h3>
      <div className='flex gap-3 justify-evenly'>
        {company.outstandings.map((food) => {
          return (
            <div className='flex flex-col items-center gap-1'>
              <Image
                alt={food.name}
                src={food.img}
                width={150}
                height={120}
                className='rounded-lg'
                style={{ objectFit: 'cover', width: '150px', height: '120px' }}
              />
              <h3 className='text-sm'>{food.name}</h3>
              <h3 className='text-md text-title'>{convertPrice(food.price)}</h3>
            </div>
          )
        })}
      </div>
      <ChangeOutstandingsButton company={company} />
    </div>
  )
}

export default Outstandings

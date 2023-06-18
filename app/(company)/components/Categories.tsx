import { BackspaceIcon, PlusIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'

interface Props {
  categories: string[]
}
const Categories: FC<Props> = ({ categories }) => {
  return (
    <div className='mt-28 border-l-2 pl-3 min-w-[250px]'>
      <div className='flex justify-between items-center mb-1'>
        <h2 className='font-bold text-lg'>Categorias</h2>
        <PlusIcon
          className='w-9 text-white bg-btn p-2 rounded-full cursor-pointer transition duration-500
              ease-in-out hover:scale-110 hover:bg-btn2'
        />
      </div>
      <hr />
      <div className='mt-2'>
        {categories.map((category) => {
          return (
            <div className='flex justify-between'>
              <h4 className='py-3'>- {category}</h4>
              <BackspaceIcon className='w-6 cursor-pointer mr-4' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories

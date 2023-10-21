import { FC } from 'react'
import AddCategoryButton from './AddCategoryButton'
import DeleteCategoryButton from './DeleteCategoryButton'

interface Props {
  categories: string[]
}
const Categories: FC<Props> = ({ categories }) => {
  return (
    <div className='border-l-2 pl-3'>
      <div className='flex justify-between items-center mb-1'>
        <h2 className='font-bold text-lg'>Categorias</h2>
        <AddCategoryButton />
      </div>
      <hr />
      <div className='mt-2'>
        {categories.map((category) => {
          return (
            <div className='flex justify-between'>
              <h4 className='py-3'>- {category}</h4>
              <DeleteCategoryButton name={category} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories

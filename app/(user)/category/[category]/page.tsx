import Categories from '@/components/Categories'
import Foods from '@/components/Foods'
import { getCategories, getFoodsByCategory } from '@/lib/queries'
import React from 'react'

interface Props {
  params: { category: string }
}

const Category = async ({ params: { category } }: Props) => {
  const categories = await getCategories()
  const foods = await getFoodsByCategory(category.toLowerCase().replaceAll('%20', ' '))

  return (
    <div className='pb-5'>
      <Categories categories={categories} />
      <h2 className='text-title text-xl font-bold w-full text-center'>
        {category.replaceAll('%20', ' ')}
      </h2>
      <div className='grid grid-cols-3 gap-3 max-sm:grid-cols-1 max-lg:grid-cols-2 mx-3 w-fit'>
        {foods.length < 1 ? (
          <h1 className='text-center text-title text-xl font-bold mt-10'>
            ⚠️ No se encontraron resultados...
          </h1>
        ) : (
          <Foods foods={foods} />
        )}
      </div>
    </div>
  )
}

export default Category

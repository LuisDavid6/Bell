import React from 'react'
import Search from './Search'
import { getCompanyCategories, getFoodsByCompany } from '@/lib/queries'
import { getSession } from '@/lib/getSession'
import Foods from './components/Foods'
import Categories from './components/Categories'
import AddProductButton from './components/AddProductButton'

interface Props {
  searchParams: { name: string }
}

const Products = async ({ searchParams: { name } }: Props) => {
  const session = await getSession()
  const foods = await getFoodsByCompany(session?.user.id || '', name?.replaceAll('%20', ' ') || '')
  const categories = await getCompanyCategories(session?.user.id || '')

  return (
    <div className='mt-4 flex flex-col justify-center max-lg:items-center lg:flex-row gap-x-16 gap-y-16 mr-2 max-[500px]:-ml-10'>
      <div>
        <div className='flex justify-center gap-5 mt-10'>
          <Search />
          <AddProductButton />
        </div>
        <Foods foods={foods} />
      </div>
      <div className='w-full max-w-md mt-10'>
        <Categories categories={categories} />
      </div>
    </div>
  )
}

export default Products

import React from 'react'
import Search from '../components/Search'
import { getCompanyCategories, getFoodsByCompany } from '@/lib/queries'
import { getSession } from '@/lib/getSession'
import Foods from '../components/Foods'
import { PlusSmallIcon } from '@heroicons/react/24/solid'
import Categories from '../components/Categories'

interface Props {
  searchParams: { name: string }
}

const Products = async ({ searchParams: { name } }: Props) => {
  const session = await getSession()
  const foods = await getFoodsByCompany(session?.user.sub || '', name?.replaceAll('%20', ' ') || '')
  const categories = await getCompanyCategories(session?.user.sub || '')

  return (
    <div className='mt-4 flex gap-16'>
      <div>
        <div className='flex justify-center gap-5 mt-10'>
          <Search />
          <button
            className='bg-btn py-1 pl-2 pr-4 text-white rounded transition duration-500
                ease-in-out hover:scale-110 hover:bg-btn2 flex items-center'
          >
            <PlusSmallIcon className='w-6' />
            Nuevo producto
          </button>
        </div>
        <Foods foods={foods} />
      </div>
      <div>
        <Categories categories={categories} />
      </div>
    </div>
  )
}

export default Products

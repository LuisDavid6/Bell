import Categories from '@/components/Categories'
import Foods from '@/components/Foods'
import { getCategories, getSearchFoods } from '@/lib/queries'

interface Props {
  searchParams: { name: string }
}

const SearchFoods = async ({ searchParams: { name } }: Props) => {
  const foods = await getSearchFoods(name.replaceAll('%20', ' '))
  const categories = await getCategories()

  return (
    <div>
      <Categories categories={categories} />
      {foods.length < 1 ? (
        <h1 className='text-center text-xl font-bold mt-10'>⚠️ No se encontraron resultados...</h1>
      ) : (
        <div className='grid grid-cols-3 gap-3 max-sm:grid-cols-1 max-lg:grid-cols-2 mx-3 w-fit'>
          <Foods foods={foods} />
        </div>
      )}
    </div>
  )
}

export default SearchFoods

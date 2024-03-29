'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Search = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSearch = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    router.push(`/products?name=${search}`)
  }

  return (
    <div className='relative'>
      <MagnifyingGlassIcon className='absolute left-0 bottom-2 ml-2 w-5' />
      <form onSubmit={handleSearch}>
        <input
          className='rounded-md bg-transparent w-full border-2 border-btn focus:outline-none placeholder-black dark:placeholder-gray-400 pl-8 pr-16 py-1'
          placeholder='buscar...'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
      </form>
      {search.length > 0 && (
        <button onClick={handleSearch} className='absolute right-3 bottom-1.5 text-xs text-white bg-title rounded p-1'>
          Buscar
        </button>
      )}
    </div>
  )
}

export default Search

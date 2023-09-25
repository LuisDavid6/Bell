'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className={
        'bg-transparent font-bold py-2 px-3 flex items-center gap-1 rounded-full transition duration-500 ease-in-out hover:scale-110 hover:text-title'
      }
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <MoonIcon className='w-6' /> : <SunIcon className='w-6' />}
    </button>
  )
}

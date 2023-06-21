import React, { ChangeEvent } from 'react'

interface Props {
  id: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string | number
  type: string
}
const Input: React.FC<Props> = ({ id, value, type, onChange }) => {
  return (
    <input
      id={id}
      type={type}
      autoComplete='off'
      value={value}
      className='border-2 focus:border-title rounded-lg p-2 bg-transparent
        text-md text-gray-500 appearance-none focus:outline-none focus:ring-0 peer sm:w-full'
      placeholder=''
      onChange={onChange}
    />
  )
}

export default Input

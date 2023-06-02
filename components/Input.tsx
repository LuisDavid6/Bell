import React from 'react'

interface Props {
  id: string
  onChange: any
  value: string
  label: string
  type?: string
}
const Input: React.FC<Props> = ({ id, label, value, type, onChange }) => {
  return (
    <div className='relative'>
      <input
        id={id}
        type={type}
        value={value}
        className='border-b-2 focus:border-b-btn px-2 pt-6 w-full bg-transparent text-md appearance-none
          focus:outline-none focus:ring-0 peer'
        placeholder=' '
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 
          top-4 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-3 cursor-text'
      >
        {label}
      </label>
    </div>
  )
}

export default Input

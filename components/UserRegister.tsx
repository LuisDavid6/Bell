'use client'
import React, { useState } from 'react'
import Input from '@/components/Input'
import { Formik } from 'formik'

const UserRegister = () => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')

  return (
    <div>
      <div className='bg-bg p-3 w-full my-5 rounded-lg'>
        <h3 className='md:text-xl font-bold text-center'>¡Regístrate y pide tu comida favorita!</h3>
        <h5 className='text-sm md:text-md text-center'>Contamos con los mejores restaurantes</h5>
      </div>
      <Formik
        initialValues={{ name: '', lastname: '' }}
        validationSchema={() => console.log('')}
        onSubmit={() => console.log('')}
      >
        {({ values, errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              id='name'
              label='Nombre'
              value={name}
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              register
            />
            <Input
              id='lastname'
              label='Apellidos'
              value={lastname}
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastname(e.target.value)}
              register
            />
          </form>
        )}
      </Formik>
    </div>
  )
}

export default UserRegister

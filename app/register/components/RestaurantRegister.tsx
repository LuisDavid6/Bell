'use client'
import Input from '@/components/Input'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import useRestaurantRegister from '@/hooks/useRestaurantRegister'
import { useState } from 'react'
import { errorAlert } from '@/lib/alerts'

const UserRegister = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  return (
    <div>
      <div className='bg-bg dark:bg-bgDark p-3 w-full my-5 rounded-lg'>
        <h3 className='md:text-xl font-bold text-center'>¡Regístrate y empieza a vender!</h3>
        <h5 className='text-sm md:text-md text-center'>Disfruta de todos los beneficios como aliado</h5>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPaswword: '',
          address: '',
          tel: '',
          horary: '',
          shipping: 0,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('*Este campo es requerido'),
          email: Yup.string().required('*Este campo es requerido').email('*Correo inválido'),
          password: Yup.string().required('*Este campo es requerido'),
          confirmPaswword: Yup.string()
            .required('*Este campo es requerido')
            .oneOf([Yup.ref('password')], 'Debe coincidir con la contraseña'),
          address: Yup.string().required('*Este campo es requerido'),
          tel: Yup.string().required('*Este campo es requerido'),
          horary: Yup.string().required('*Este campo es requerido'),
          shipping: Yup.number().required('*Este campo es requerido'),
        })}
        onSubmit={async ({ name, email, password, address, tel, horary, shipping }) => {
          setLoading(true)

          const register = await useRestaurantRegister({
            name,
            email,
            password,
            address,
            tel,
            horary,
            shipping,
          })

          if (register === 'success') router.push('/login')
          else {
            errorAlert('Un error ha ocurrido')
            setLoading(false)
          }
        }}
      >
        {({ values, errors, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='grid md:grid-cols-2 gap-5'>
              <section>
                <Input id='name' label='Nombre del restaurante' value={values.name} type='text' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.name}</span>
              </section>
              <section>
                <Input id='email' label='Email' value={values.email} type='text' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.email}</span>
              </section>
              <section>
                <Input id='password' label='Contraseña' value={values.password} type='password' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.password}</span>
              </section>
              <section>
                <Input
                  id='confirmPaswword'
                  label='Confirmar contraseña'
                  value={values.confirmPaswword}
                  type='password'
                  onChange={handleChange}
                  register
                />
                <span className='text-xs font-semibold text-red-600'>{errors.confirmPaswword}</span>
              </section>
              <section>
                <Input id='address' label='Dirección' value={values.address} type='text' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.address}</span>
              </section>
              <section>
                <Input id='tel' label='teléfono' value={values.tel} type='number' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.tel}</span>
              </section>
              <section>
                <Input id='horary' label='Horario de atención' value={values.horary} type='text' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.horary}</span>
              </section>
              <section>
                <Input id='shipping' label='Valor domicilio' value={values.shipping} type='number' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.shipping}</span>
              </section>
            </div>
            <button
              type='submit'
              disabled={loading}
              className='bg-btn hover:bg-btn2 w-3/6 md:w-2/6 place-self-center mt-10 py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed'
            >
              Registrar restaurante
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default UserRegister

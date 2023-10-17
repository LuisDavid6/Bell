'use client'

import Input from '@/components/Input'
import { Company } from '@/types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import useUpdateInfo from '../../hooks/useUpdateInfo'
import { errorAlert, successAlert } from '@/lib/alerts'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const UpdateInfoForm = ({ company }: { company: Company }) => {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  return (
    <div>
      <div className='bg-bg2 dark:bg-bgDark p-3 w-full my-5 rounded-lg'>
        <h3 className='md:text-xl font-bold text-center'>Actualizar datos</h3>
      </div>
      <Formik
        initialValues={{
          name: company.name,
          tel: company.tel,
          address: company.address,
          horary: company.horary,
          shipping: company.shipping,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('*Este campo es requerido'),
          tel: Yup.number().required('*Este campo es requerido'),
          address: Yup.string().required('*Este campo es requerido'),
          horary: Yup.string().required('*Este campo es requerido'),
          shipping: Yup.number().required('*Este campo es requerido'),
        })}
        onSubmit={async ({ name, tel, address, horary, shipping }) => {
          setLoading(true)

          const response = await useUpdateInfo(company.id, { name, tel, horary, address, shipping })

          if (response === 'success') {
            successAlert('Datos actualizados con éxito')
            router.refresh()
          } else errorAlert('Un error ha ocurrido')

          setLoading(false)
        }}
      >
        {({ values, errors, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='grid md:grid-cols-2 gap-5'>
              <section>
                <Input id='name' label='Nombre' value={values.name} type='text' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.name}</span>
              </section>

              <section>
                <Input id='tel' label='Teléfono' value={values.tel} type='text' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.tel}</span>
              </section>

              <section>
                <Input id='address' label='Dirección' value={values.address} type='text' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.address}</span>
              </section>

              <section>
                <Input id='horary' label='Horario de atención' value={values.horary} type='text' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.horary}</span>
              </section>

              <section>
                <Input id='shipping' label='Envío' value={values.shipping} type='number' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.shipping}</span>
              </section>
            </div>
            <button
              type='submit'
              disabled={loading}
              className='bg-btn hover:bg-btn2 w-3/6 md:w-2/6 place-self-center mt-10 py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed'
            >
              Guardar cambios
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default UpdateInfoForm

'use client'
import Input from '@/components/Input'
import { errorAlert, successAlert } from '@/lib/alerts'
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import { Formik } from 'formik'
import Image from 'next/image'
import { BaseSyntheticEvent, useState } from 'react'
import * as Yup from 'yup'
import useAddFood from '../../hooks/useAddFood'

const AddProductForm = ({ closeModal }: { closeModal: () => void }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: BaseSyntheticEvent) => {
    const file = event.target.files?.[0]

    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file)
    }
  }

  const uploadImage = async () => {
    if (selectedFile) {
      const formData = new FormData()

      formData.append('file', selectedFile)
      formData.append('upload_preset', 'ztqdlglo')
      formData.append('folder', 'Bell/foods')

      try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
          method: 'POST',
          body: formData,
        })
        const file = await res.json()
        return file.secure_url
      } catch (error) {
        // console.log(error)
      }
    }
  }

  return (
    <div>
      <div className='bg-bg2 dark:bg-bgDark p-3 w-full my-5 rounded-lg'>
        <h3 className='md:text-xl font-bold text-center'>Nuevo Producto</h3>
      </div>
      <Formik
        initialValues={{
          name: '',
          description: '',
          price: 0,
          offer: false,
          offerPrice: 0,
          img: '',
          category: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('*Este campo es requerido'),
          description: Yup.string().required('*Este campo es requerido'),
          price: Yup.number().required('*Este campo es requerido').min(1000, '*El valor debe ser mayor'),
          category: Yup.string().required('*Este campo es requerido'),
        })}
        onSubmit={async ({ name, price, description, offer, offerPrice, img, category }) => {
          const imageUrl = await uploadImage()

          if (imageUrl) {
            const response = await useAddFood({ name, price, description, offer, offerPrice, category: category.split(','), img: imageUrl })

            if (response === 'success') {
              successAlert('Producto agregado con éxito')
              closeModal()
            } else errorAlert('Un error ha ocurrido')
          } else errorAlert('Un error ha ocurrido')
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
                <Input id='price' label='Precio' value={values.price} type='number' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.price}</span>
              </section>

              <section>
                <Input id='description' label='Descripción' value={values.description} type='text' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.description}</span>
              </section>
              <section>
                <Input id='category' label='Categorias' value={values.category} type='text' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.category}</span>
              </section>
            </div>

            <div className='flex flex-col items-center mt-5'>
              <h4 className='text-md text-zinc-400 mb-4'>Imagen</h4>
              {selectedFile && (
                <Image
                  src={URL.createObjectURL(selectedFile)}
                  alt={values.name}
                  width='0'
                  height='0'
                  sizes='100vw'
                  style={{ objectFit: 'cover', width: 'auto', height: '200px' }}
                  className='w-full h-auto rounded-xl object-cover'
                />
              )}
              <input id='img' type='file' accept='image/*' className=' hidden' onChange={handleFileChange} />

              <label
                htmlFor='img'
                className='bg-gray-600 text-white rounded-md cursor-pointer w-fit text-center px-4 py-1 hover:bg-gray-800 flex gap-2 mt-3'
              >
                <ArrowUpTrayIcon className='text-white w-5' />
                <span>Seleccionar archivo</span>
              </label>
            </div>

            <div className='mt-8 flex gap-3 items-center ml-1'>
              <section className='flex items-center'>
                <input type='checkbox' name='offer' className='w-6 h-6 bg-transparent text-title' checked={values.offer} onChange={handleChange} />
                <span className='ml-2'>Oferta</span>
              </section>

              {values.offer && (
                <section className='md:w-2/6'>
                  <Input id='offerPrice' label='Precio de oferta' value={values.offerPrice} type='number' onChange={handleChange} register />
                  <span className='text-xs font-semibold text-red-600'>{errors.offerPrice}</span>
                </section>
              )}
            </div>

            <button type='submit' className='bg-btn hover:bg-btn2 w-3/6 md:w-2/6 place-self-center mt-10 py-2 rounded-lg text-white'>
              Guardar
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddProductForm

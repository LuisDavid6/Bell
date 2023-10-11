'use client'
import Input from '@/components/Input'
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import { Food } from '@/types'
import { Formik } from 'formik'
import Image from 'next/image'
import * as Yup from 'yup'
import { BaseSyntheticEvent, useState } from 'react'
import useUpdateFood from '../../hooks/useUpdateFood'
import { errorAlert, successAlert } from '@/lib/alerts'
import { useRouter } from 'next/navigation'

const UpdateFoodForm = ({ food }: { food: Food }) => {
  const router = useRouter()

  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFileChange = (event: BaseSyntheticEvent) => {
    const file = event.target.files[0]
    setSelectedFile(file)
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
        errorAlert('Error al cargar la imagen')
      }
    }
  }

  return (
    <div>
      <div className='bg-bg2 dark:bg-bgDark p-3 w-full mb-5 rounded-lg'>
        <h3 className='md:text-xl font-bold text-center'>Actualizar datos</h3>
      </div>
      <Formik
        initialValues={{
          name: food.name,
          price: food.price,
          description: food.description,
          category: food.category.join(','),
          offer: food.offer,
          offerPrice: food.offerPrice,
          img: food.img,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('*Este campo es requerido'),
          price: Yup.number().required('*Este campo es requerido').min(500, '*valor mínimo 500'),
          description: Yup.string().required('*Este campo es requerido'),
          offerPrice: Yup.number(),
        })}
        onSubmit={async ({ name, description, price, img, category, offer, offerPrice }) => {
          setLoading(true)

          const imageUrl = await uploadImage()

          const response = await useUpdateFood(food.id, {
            name,
            price,
            description,
            offer,
            offerPrice,
            category: category.split(','),
            img: imageUrl ?? img,
          })

          if (response === 'success') {
            successAlert('Producto actualizado con éxito')
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

            <div className='mt-10 flex flex-col items-center gap-4'>
              <section>
                {selectedFile ? (
                  <Image
                    src={URL.createObjectURL(selectedFile)}
                    alt={food.name}
                    width='0'
                    height='0'
                    sizes='100vw'
                    style={{ objectFit: 'cover', width: 'auto', height: '200px' }}
                    className='w-full h-auto rounded-xl object-cover'
                  />
                ) : (
                  <Image
                    src={food.img}
                    alt={food.name}
                    width='0'
                    height='0'
                    sizes='100vw'
                    style={{ objectFit: 'cover', width: 'auto', height: '200px' }}
                    className='w-full h-auto rounded-xl object-cover'
                  />
                )}
              </section>
              <section>
                <label
                  htmlFor='img'
                  className='bg-gray-600 text-white rounded-md cursor-pointer w-fit text-center px-4 py-1 hover:bg-gray-800 flex gap-2'
                >
                  <ArrowUpTrayIcon className='text-white w-5' />
                  <span>Seleccionar archivo</span>
                </label>
                <input
                  id='img'
                  type='file'
                  accept='image/*'
                  className='hidden opacity-0, overflow-hidden absolute z-10'
                  onChange={handleFileChange}
                />
                <span className='text-xs font-semibold text-red-600'>{errors.img}</span>
              </section>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='bg-btn hover:bg-btn2 w-3/6 md:w-2/6 place-self-center mt-10 py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed '
            >
              Guardar cambios
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default UpdateFoodForm

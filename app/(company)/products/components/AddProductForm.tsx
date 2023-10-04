'use client'
import Input from '@/components/Input'
import { Formik } from 'formik'
import * as Yup from 'yup'

const AddProductForm = () => {
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
          img: '',
          category: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('*Este campo es requerido'),
          description: Yup.string().required('*Este campo es requerido'),
          price: Yup.number().required('*Este campo es requerido').min(1000, '*El valor debe ser mayor'),
          img: Yup.string().required('*Este campo es requerido'),
          category: Yup.string().required('*Este campo es requerido'),
        })}
        onSubmit={async ({ name, price, description, offer, img, category }) => {
          console.log(offer)
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
              <section>
                <Input id='img' label='Imagen' value={values.img} type='file' onChange={handleChange} register />
                <span className='text-xs font-semibold text-red-600'>{errors.img}</span>
              </section>
              <section>
                <input type='checkbox' name='offer' onChange={handleChange} />
                <span className='ml-2'>Oferta</span>
              </section>
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

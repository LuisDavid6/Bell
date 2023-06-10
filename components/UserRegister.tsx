'use client'
import Input from '@/components/Input'
import useUserRegister from '@/hooks/useUserRegister'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'

const UserRegister = () => {
  const router = useRouter()

  return (
    <div>
      <div className='bg-bg2 p-3 w-full my-5 rounded-lg'>
        <h3 className='md:text-xl font-bold text-center'>¡Regístrate y pide tu comida favorita!</h3>
        <h5 className='text-sm md:text-md text-center'>Contamos con los mejores restaurantes</h5>
      </div>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPaswword: '',
          address: '',
          tel: '',
        }}
        validationSchema={Yup.object({
          username: Yup.string().required('*Este campo es requerido'),
          email: Yup.string().required('*Este campo es requerido').email('*Correo inválido'),
          password: Yup.string().required('*Este campo es requerido'),
          confirmPaswword: Yup.string()
            .required('*Este campo es requerido')
            .oneOf([Yup.ref('password')], 'Debe coincidir con la contraseña'),
          address: Yup.string().required('*Este campo es requerido'),
          tel: Yup.string().required('*Este campo es requerido'),
        })}
        onSubmit={async ({ username, email, password, address, tel }) => {
          const register = await useUserRegister({
            username,
            email,
            password,
            address: [address],
            tel: tel.toString(),
          })

          if (register === 'success') router.push('/login')
        }}
      >
        {({ values, errors, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='grid md:grid-cols-2 gap-5'>
              <section>
                <Input
                  id='username'
                  label='username'
                  value={values.username}
                  type='text'
                  onChange={handleChange}
                  register
                />
                <span className='text-xs font-semibold text-red-600'>{errors.username}</span>
              </section>
              <section>
                <Input
                  id='email'
                  label='Email'
                  value={values.email}
                  type='text'
                  onChange={handleChange}
                  register
                />
                <span className='text-xs font-semibold text-red-600'>{errors.email}</span>
              </section>
              <section>
                <Input
                  id='password'
                  label='Contraseña'
                  value={values.password}
                  type='password'
                  onChange={handleChange}
                  register
                />
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
                <Input
                  id='address'
                  label='Dirección'
                  value={values.address}
                  type='text'
                  onChange={handleChange}
                  register
                />
                <span className='text-xs font-semibold text-red-600'>{errors.address}</span>
              </section>
              <section>
                <Input
                  id='tel'
                  label='teléfono'
                  value={values.tel}
                  type='number'
                  onChange={handleChange}
                  register
                />
                <span className='text-xs font-semibold text-red-600'>{errors.tel}</span>
              </section>
            </div>
            <button
              type='submit'
              className='bg-btn hover:bg-btn2 w-3/6 md:w-2/6 place-self-center mt-10 py-2 rounded-lg text-white'
            >
              Crear cuenta
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default UserRegister

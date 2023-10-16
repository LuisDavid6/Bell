import Logo from './Logo'

const Footer = () => {
  const generateDate = () => {
    const date = new Date().toLocaleDateString('es-CO')
    return date.substring(date.length - 4)
  }

  return (
    <div className='bg-bg  bg-cover pb-5 pt-3 dark:bg-gradient-to-b dark:from-black dark:via-neutral-800 dark:to-neutral-900'>
      <div className='flex justify-center mb-5'>
        <Logo width={200} height={100} />
      </div>
      <div className='grid grid-cols-1 min-[410px]:grid-cols-2 min-[600px]:grid-cols-3 gap-y-5 justify-items-center mb-8'>
        <section className='flex flex-col w-full sm:w-fit px-2'>
          <h3 className='font-extrabold text-lg mb-5'>Nuestra Empresa</h3>
          <p>
            <span className='text-title'>{`> `}</span>Envios
          </p>
          <p>
            <span className='text-title'>{`> `}</span>Ofertas
          </p>
          <p>
            <span className='text-title'>{`> `}</span>Novedades
          </p>
          <p>
            <span className='text-title'>{`> `}</span>Contáctanos
          </p>
        </section>
        <section className='flex flex-col w-full sm:w-fit px-2'>
          <h3 className='font-extrabold text-lg mb-5'>Ayuda</h3>
          <p>
            <span className='text-title'>{`> `}</span>Pagos
          </p>
          <p>
            <span className='text-title'>{`> `}</span>Promociones
          </p>
          <p>
            <span className='text-title'>{`> `}</span>Políticas de privacidad
          </p>
          <p>
            <span className='text-title'>{`> `}</span>Terminos y condiciones
          </p>
        </section>
        <section className='flex flex-col w-full sm:w-fit px-2'>
          <h3 className='font-extrabold text-lg mb-5'>Información</h3>
          <p>
            <span className='text-title'>{`> `}</span>Mi cuenta
          </p>
          <p>
            <span className='text-title'>{`> `}</span>Preguntas frecuentes
          </p>
          <p>
            <span className='text-title'>{`> `}</span>Estado de mi pedido
          </p>
          <p>
            <span className='text-title'>{`> `}</span>Soporte
          </p>
        </section>
      </div>
      <hr className='bg-red-400' />
      <div className='flex flex-col sm:flex-row gap-x-2 justify-center'>
        <h5 className='text-center italic mt-3'>© {generateDate()} All Rights Reserved.</h5>
        <h5 className='text-center italic mt-3'>Developed By Luis David Patiño</h5>
      </div>
    </div>
  )
}

export default Footer

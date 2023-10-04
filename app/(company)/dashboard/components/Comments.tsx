import React from 'react'

const Comments = () => {
  const comments = [
    {
      user: 'Juan',
      message: 'Buen servicio',
    },
    {
      user: 'Laura',
      message: 'Entrega muy rápida',
    },
    {
      user: 'Alex',
      message: 'Muy contento con el pedido',
    },
    {
      user: 'Lorena',
      message: 'Buen servicio',
    },
    {
      user: 'Carlos',
      message: 'Excelentes precios y buena calidad',
    },
    {
      user: 'Vanessa',
      message: 'Mal servicio, no me mandaron las gaseosas',
    },
  ]

  return (
    <div className='max-w-xs'>
      <h3 className='text-lg font-bold mb-2'>Comentarios</h3>
      <hr />
      {comments.map(({ user, message }) => {
        return (
          <div className='my-4'>
            <h2 className='font-bold'>@{user}</h2>
            <h2 className='ml-3 italic'>{message}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Comments

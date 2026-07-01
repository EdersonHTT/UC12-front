import React from 'react'

function Botao({ text, fu }) {
  return (
    <button className='btn bg-(--primary-color) py-2 rounded-sm text-lg font-bold
    ' onClick={fu}>{
      text
    }</button>
  )
}

export default Botao
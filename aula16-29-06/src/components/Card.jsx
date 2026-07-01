import React from 'react'
import { User } from "lucide-react"
import Botao from './Botao'

function Card() {
  return (
    <div className='card'> 
        <div className='header-card'>
            <div className='icon' ><User style={{width: "2.5rem", height: "2.5rem", }}/></div>
            <h2 className='font-bold'>Perfil</h2>
        </div>
        <div className='main'>
          <p className='text-xl text-justify px-5 mt-[10%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse vero cum?</p>

          <Botao text={"Saiba Mais"}/>
        </div>
    </div>
  )
}

export default Card
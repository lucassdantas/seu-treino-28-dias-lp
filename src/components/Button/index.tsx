import React, { ReactNode } from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

export const Button = ({children}:{children:ReactNode}) => {
  return (
    <div className='border border-orange-seu-treino rounded-xl'>
      <div className='bg-yellow-seu-treino -mb-4 -ml-4 rounded-xl p-4 text-center'>
        {children}
      </div>
    </div>
  )
}

export const ArrowButton = () => {
  return(
    <div className='bg-transparent border border-orange-seu-treino rounded-xl p-2 text-center cursor-pointer'>
      <div className='bg-yellow-seu-treino rounded-xl p-2 text-center'>
        <MdOutlineArrowOutward className='text-4xl text-black' />
      </div>
    </div>
  )
}
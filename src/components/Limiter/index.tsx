import { ReactNode } from 'react'

export const Limiter = ({children}:{children:ReactNode}) => {
  return (
    <div className='w-full h-full flex justify-center bg-black text-white '>
      <div className='max-w-[1280px] w-full flex justify-center'>{children}</div>
    </div>
  )
}

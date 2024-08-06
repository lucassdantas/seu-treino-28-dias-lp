import { ReactNode } from 'react'

export const Limiter = ({children, className=''}:{children:ReactNode, className?:string}) => {
  return (
    <div className='w-full h-full flex justify-center text-white '>
      <div className={`max-w-[1080px] w-full ${className}`}>{children}</div>
    </div>
  )
}

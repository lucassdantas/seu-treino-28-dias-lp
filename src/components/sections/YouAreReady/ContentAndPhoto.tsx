import { ContentAndPhotoType } from '@/types/ContentAndPhoto'
import React from 'react'


interface ContentAndPhotoProps extends ContentAndPhotoType{
  index:number
  className?:string
}
export const ContentAndPhoto = ({title, content, photo, altText='Imagem do benefício', index, className=''}:ContentAndPhotoProps) => {
  return (
    <div className={`flex ${index%2==0?'lg:flex-row':'lg:flex-row-reverse'} flex-col-reverse gap-4 items-center justify-center ${className}`}>
      <div className='w-1/2 text-left'>
        <h3 className='font-bold text-2xl mb-2'>{title}</h3>
        <p>{content}</p>
      </div>
      <div className='w-1/2'><img src={photo } alt={altText}/></div>
    </div>
  )
}

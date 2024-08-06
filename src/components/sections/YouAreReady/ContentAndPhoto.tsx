import { ContentAndPhotoType } from '@/types/ContentAndPhoto'
import React from 'react'


interface ContentAndPhotoProps extends ContentAndPhotoType{
  index:number
  className?:string
}
export const ContentAndPhoto = ({title, content, photo, altText, index, className=''}:ContentAndPhotoProps) => {
  return (
    <div className={`flex ${index%2==0?'lg:flex-row':'lg:flex-row-reverse'} flex-col-reverse gap-4 items-center justify-center ${className}`}>
      <div className='w-1/2 text-left'>
        <h3 className='font-bold text-2xl mb-2'>{title}</h3>
        <p>{content}</p>
      </div>
      <div className='w-1/2'>
        <ContentAndPhotoImage photo={photo} index={index} altText={altText}/>
      </div>
    </div>
  )
}

export const ContentAndPhotoImage = ({photo, index, altText='Imagem do benefício'}:{photo:string, index:number, altText?:string}) => {
  return(
    <div className=''>
        <div className='z-10 border border-orange-seu-treino absolute w-1/2 h-fit rounded-xl'></div>
        <img src={photo} alt={altText}/>
    </div>
  )
}

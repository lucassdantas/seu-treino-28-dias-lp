import { ImageWithBorder } from '@/components/ImageWithBorder'
import { ContentAndPhotoType } from '@/types/ContentAndPhoto'


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
      <ImageWithBorder image={photo} altText={altText} width={'500px'} height={'320px'} gray={true} inverse={index%2 === 0 ? false:true}/>
    </div>
  )
}

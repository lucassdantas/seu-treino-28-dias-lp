type ImageWithBorderProps = {
  image:string,
  altText:string,
  width:string,
  height:string
}
export const ImageWithborder = ({image, altText, width, height}:ImageWithBorderProps) => {
  return (
    <div className='rounded-lg min-h-[128px] '>
      <div className={` w-full z-10 absolute border border-orange-seu-treino rounded-xl mt-2 `} style={{height:height, width:width}}></div>
      <img src={image} alt={altText} className={` -ml-2 rounded-xl h-full  w-full object-cover`}  style={{height:height, width:width}}/>
    </div>
  )
}

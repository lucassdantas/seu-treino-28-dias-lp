type ImageWithBorderProps = {
  image: string;
  altText: string;
  width: string;
  height: string;
  hasTabEffect?: boolean;
  inverse?: boolean;
}

export const ImageWithBorder = ({ image, altText, width, height, hasTabEffect = true, inverse = false }: ImageWithBorderProps) => {
  return (
    <div className={`relative rounded-lg min-h-[128px] ${inverse ? 'flex-row-reverse' : ''}`}>
      <div 
        className={`w-full z-20 absolute border border-orange-seu-treino rounded-xl mt-2 ${inverse ? 'right-0' : 'left-0'}`} 
        style={{ height: height, width: width, transform: inverse ? 'scaleX(-1)' : 'none' }}
      ></div>
      
      {hasTabEffect && (
        <div 
          className={`bg-orange-seu-treino absolute w-[50px] h-[50px] rounded-xl top-[40%] z-0`} 
          style={{ left: inverse ? 'auto' : '-3%', right: inverse ? '-3%' : 'auto', transform: inverse ? 'scaleX(-1)' : 'none' }}
        ></div>
      )}
      
      <img 
        src={image} 
        alt={altText} 
        className={`z-10 relative -ml-2 rounded-xl h-full w-full object-cover`}  
        style={{ height: height, width: width }}
      />
    </div>
  );
}

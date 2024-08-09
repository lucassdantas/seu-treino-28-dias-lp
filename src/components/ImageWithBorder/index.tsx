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
    <div className="relative rounded-lg min-h-[128px]">
      <div 
        className="w-full z-20 absolute border border-orange-seu-treino rounded-xl mt-2" 
        style={{ height: height, width: width }}
      ></div>
      
      {hasTabEffect && (
        <div 
          className={`bg-orange-seu-treino absolute w-[50px] h-[50px] rounded-xl top-[40%] z-0 ${inverse? 'right-[3%]':'left-[-3%]'}` }
        ></div>
      )}
      
      <img 
        src={image} 
        alt={altText} 
        className={`z-10 relative rounded-xl h-full w-full object-cover ${inverse ? 'ml-2' : '-ml-2'}`}  
        style={{ height: height, width: width }}
      />
    </div>
  );
}

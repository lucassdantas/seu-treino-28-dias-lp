import { MdOutlineArrowOutward } from 'react-icons/md'

export const Button = ({text = 'Garanta sua inscrição', className=''}:{text?:string, className?:string}) => {
  return (
    <a className={`text-black cursor-pointer mt-8 ml-4 transition ease-in-out hover:scale-110 duration-300 max-w-[268px] ${className}`} href='https://pay.kiwify.com.br/rn2sINU' target='_blank'>
      <div className="border border-orange-seu-treino rounded-xl pb-2 pr-2 ">
        <div className='flex bg-gradient-to-r from-orange-seu-treino via-white to-orange-seu-treino  -mt-4 -ml-4 rounded-xl p-3 text-center z-10 font-bold justify-center items-center uppercase'>
          <span>{text}</span>
        </div>
      </div>
    </a>
  )
}

export const ArrowButton = ({size=50, rounded='xl', borderRounded='1rem'}:{size?:number, rounded?:string, borderRounded?:string}) => {
  return(
    <div className={`flex bg-transparent border border-orange-seu-treino p-3 text-center justify-center cursor-pointer w-fit transition ease-in-out hover:scale-110 duration-300 `} style={{borderRadius:borderRounded}} >
      <div className={`flex bg-gradient-to-tr from-orange-seu-treino via-white to-orange-seu-treino rounded-${rounded} p-1 text-center justify-center`}>
        <MdOutlineArrowOutward className={` text-black`}  size={size} />
      </div>
    </div>
  )
}
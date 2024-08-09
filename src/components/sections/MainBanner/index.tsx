import logo from '@/assets/logo-seu-treino-linha-branca-breno-silva.png'
import { ArrowButton } from '@/components/Button'
import { Section } from '@/components/Section'
import './style.css'
export const MainBanner = () => {
  return (
    <Section className='relative h-[512px] flex flex-col items-center justify-center'>
      <div className='absolute w-screen h-full left-0 top-0 firstSection z-0 opacity-85'></div>
      <div className='relative z-20 p-2'>
        <img src={logo} alt='logo' className='max-w-[512px] w-full'/>
        <div className="flex lg:flex-row flex-col items-start lg:items-center gap-12">
          <div>
            <h1 className='font-extrabold text-5xl mb-2'>28 Dias para Mudar</h1>
            <p className='font-bold text-2xl'>A Revolução do seu Corpo, Mente e Estilo de Vida!</p>
          </div>
          <ArrowButton size={64}/>
        </div>
      </div>
    </Section>
  )
}

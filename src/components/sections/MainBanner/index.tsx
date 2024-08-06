import logo from '@/assets/logo-seu-treino-linha-branca-breno-silva.png'
import { ArrowButton } from '@/components/Button'
import { Section } from '@/components/Section'
export const MainBanner = () => {
  return (
    <Section className='pb-32 pt-16'>
      <img src={logo} alt='logo' className='max-w-[312px]'/>
      <div className="flex items-center gap-6">
        <div>
          <h1 className='font-extrabold text-4xl'>28 Dias para Mudar</h1>
          <p className='font-bold'>A Revolução do seu Corpo, Mente e Estilo de Vida!</p>
        </div>
        <ArrowButton/>
      </div>
    </Section>
  )
}

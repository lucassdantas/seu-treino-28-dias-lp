import { Section } from '@/components/Section'
import brenoSilvaImg from '@/assets/breno-silva-persona-trainer.jpg'
import { Button } from '@/components/Button'

export const YouAreReady = () => {
  return (
  <Section className='py-12 flex'>
    <div className='flex items-center'>
      <div className='w-4/6'>
        <h2 className='text-6xl font-extrabold mb-8 '>Você está pronto para uma mudança que vai além da estética<span className='text-orange-seu-treino'>?</span></h2>
        <div className='pr-32'>
          <p className='mb-4'>Com o "<span className='text-orange-seu-treino'>Seu Treino - 28 dias para mudar</span>", você não apenas transforma seu corpo, mas também sua mente e seus hábitos.</p>
          <p className='mb-6'> Este programa foi, desenvolvido com o objetivo de inserir o exercício físico na sua vida de maneira prazerosa e definitiva, utilizando-se do método</p>
          <Button/>
        </div>
      </div>
      <div className='w-2/6'>
        <div className='rounded-lg min-h-[128px] '>
          <div className="h-[512px] w-full lg:w-[328px] z-10 absolute border border-orange-seu-treino rounded-xl mt-2 "></div>
          <img src={brenoSilvaImg} alt='Foto do Breno Silva' className=' -ml-2 rounded-xl h-[512px] lg:w-[328px] w-full object-cover'/>
        </div>
      </div>
    </div>
  </Section>
  )
}

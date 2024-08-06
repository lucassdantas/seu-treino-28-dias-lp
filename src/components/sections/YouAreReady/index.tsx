import { Limiter } from '@/components/Limiter'
import { Section } from '@/components/Section'

export const YouAreReady = () => {
  return (
  <Section className='py-12 flex'>
    <div className='flex items-center'>
      <div className='w-2/3'>
        <h2 className='text-6xl font-extrabold mb-8 '>Você está pronto para uma mudança que vai além da estética<span className='text-orange-seu-treino'>?</span></h2>
        <div className='pr-12'>
          <p className='mb-4'>Com o "<span className='text-orange-seu-treino'>Seu Treino - 28 dias para mudar</span>", você não apenas transforma seu corpo, mas também sua mente e seus hábitos.</p>
          <p> Este programa foi, desenvolvido com o objetivo de inserir o exercício físico na sua vida de maneira prazerosa e definitiva, utilizando-se do método</p>
        </div>
      </div>
      <div className='w-1/3'>
        <div className='border border-orange-seu-treino rounded-lg min-h-[128px] '>
          <img src={'#'} alt='Foto do Breno Silva'/>
        </div>
      </div>
    </div>
  </Section>
  )
}

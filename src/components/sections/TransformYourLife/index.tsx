import { ArrowButton } from '@/components/Button'
import { Section } from '@/components/Section'
import React from 'react'

export const TransformYourLife = () => {
  return (
    <Section className='bg-neutral-900 py-6'>
      <div className="flex flex-col text-center items-center gap-4">
        <div className='max-w-[612px] flex flex-col gap-4 mb-4'>
            <h2 className='text-4xl font-extrabold'>Junte-se à tribo Agora e <br/> <span className='text-orange-seu-treino'>Transforme Sua Vida!</span> </h2>
            
            <p>Este é o momento de agir. Inscreva-se no "Seu Treino - 28 dias pra mudar" e
            comece sua jornada rumo a uma vida mais saudável e equilibrada.</p>

            <p>Não perca a oportunidade de fazer parte de uma comunidade dedicada à
            transformação completa do corpo e da mente. </p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <ArrowButton size={'8xl'} rounded={'3xl'} borderRounded={'3xl'}/>
          <h2 className='text-4xl font-bold text-orange-seu-treino mt-6'>Seu Treino - 28 dias para mudar</h2>
          <p>Transforme seu corpo. Transforme sua mente. Transforme sua vida.</p>
          {/*line*/}
        </div>
      </div>
    </Section>
  )
}

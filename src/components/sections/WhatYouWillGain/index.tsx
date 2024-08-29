import { Section } from '@/components/Section'
import { ContentAndPhoto } from '@/components/sections/WhatYouWillGain/ContentAndPhoto'
import { ContentAndPhotoType } from '@/types/ContentAndPhoto'
import coupleDoingExercise from '@/assets/casal-se-exercitando-em-casa.jpg'
import manInPranchPosition from '@/assets/homem-fazendo-prancha-em-casa.jpg'
import manDoingFlexionAtHome from '@/assets/homem-fazendo-flexao-em-casa.jpg'
import womanDoingAbdominalAtHome from '@/assets/mulher-se-exercitando-em-casa.jpg'

export const WhatYouWillGain = () => {
  const contentAndPhotoData:ContentAndPhotoType[] = [
    {
      title:'Transformação Total em 28 Dias',
      content:"Você terá acesso a 28 vídeo aulas diferentes que foram cuidadosamente elaboradas para serem executadas a cada dia do projeto",
      photo:coupleDoingExercise
    },
    {
      title:'Alimentação Saudável',
      content:"Receba conteúdos exclusivos sobre como ter uma alimentação saudável, importância da hidratação e sono no processo do emagrecimento entre outros",
      photo:manInPranchPosition
    },
    {
      title:'Acesso ao fórum',
      content:"Você poderá fazer parte do nosso fórum onde irá compartilhar todas as suas experiências com outras pessoas e se tornar membro de nossa comunidade",
      photo:manDoingFlexionAtHome
    },
    {
      title:'Bônus',
      content:"Você receberá bônus exclusivos para potencializar seus resultados ",
      photo:womanDoingAbdominalAtHome
    },
  ]
  return (
  <Section className='py-4 bg-neutral-900 text-center'>
      <h2 className='font-extrabold text-4xl mb-6'>O que você vai ganhar<span className='text-yellow-seu-treino'>?</span></h2>
      {contentAndPhotoData.map((contentAndPhoto, index:number) => <ContentAndPhoto title={contentAndPhoto.title} content={contentAndPhoto.content} photo={contentAndPhoto.photo} key={index} index={index} className='my-8'/>)}
  </Section>

  )
}

import { Section } from '@/components/Section'
import { ContentAndPhoto } from '@/components/sections/YouAreReady/ContentAndPhoto'
import { ContentAndPhotoType } from '@/types/ContentAndPhoto'

export const WhatYouWillGain = () => {
  const contentAndPhotoData:ContentAndPhotoType[] = [
    {
      title:'Transformação Total em 28 Dias',
      content:"Treinamentos intensivos e eficazes, 100% com peso corporal, que você pode fazer em qualquer lugar.",
      photo:'#'
    },
    {
      title:'Desenvolvimento de Mindset',
      content:"Acesse conteúdos exclusivos e diários que vão trabalhar sua mente, ajudando a criar uma mentalidade vencedora e resiliente.",
      photo:'#'
    },
    {
      title:'Alimentação Saudável',
      content:"Receba dicas e materiais extras sobre nutrição para potencializar seus resultados cuidadosamente elaborados pela renomada nutricionista Natane Menezes.",
      photo:'#'
    },
    {
      title:'Apoio Contínuo',
      content:"Participe de um grupo fechado onde você terá acesso vitalício à nossa rede de membros, para compartilhar treinos, refeições, relatos e conquistas.",
      photo:'#'
    },
  ]
  return (
  <Section className='py-4 bg-neutral-900 text-center'>
      <h2 className='font-extrabold text-4xl mb-6'>O que você vai ganhar<span className='text-yellow-seu-treino'>?</span></h2>
      {contentAndPhotoData.map((contentAndPhoto, index:number) => <ContentAndPhoto title={contentAndPhoto.title} content={contentAndPhoto.content} photo={contentAndPhoto.photo} key={index} index={index} className='my-8'/>)}
  </Section>

  )
}

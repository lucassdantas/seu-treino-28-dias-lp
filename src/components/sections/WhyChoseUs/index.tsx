import { Section } from '@/components/Section'
import { ReasonCards } from '@/components/sections/WhyChoseUs/ReasonCards'

export const WhyChoseUs = () => {
  return (
    <Section className='py-12'>
      <div className="flex flex-col text-center items-center">
        <h2 className='font-extrabold text-4xl flex text-center mb-6'>Por que  Seu Treino <br/> 28 dias para mudar?</h2>
        <ReasonCards/>
      </div>
    </Section>
  )
}

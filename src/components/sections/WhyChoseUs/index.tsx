import { Section } from '@/components/Section'
import { BsQuote } from 'react-icons/bs'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'

export const WhyChoseUs = () => {
  return (
    <Section className='py-4'>
      <div className="flex justify-center">
        <h2 className='font-extrabold text-2xl flex'>Por que <FaQuoteLeft className='text-orange-seu-treino ml-2'/>  Seu Treino 2 dias para mudar<FaQuoteRight className='text-orange-seu-treino mr-2'/>?</h2>
      
      </div>
    </Section>
  )
}

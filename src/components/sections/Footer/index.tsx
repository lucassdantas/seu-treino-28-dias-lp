import { Section } from '@/components/Section'

export const Footer = () => {
  return (
    <footer>
      <Section className=' bg-neutral-950 '> 
        <div className='flex flex-col justify-center items-center  '>
          <p>Copyright ⓒ 2024 <a href='https://seutreino.com/' target='_blank' rel='me'><b>Seu Treino.</b></a> Todos os direitos reservados. </p>
          <p>Desenvolvido por <a href='https://www.linkedin.com/in/lucas-de-sousa-dantas/' target="_blank" rel='external'><b>Lucas Dantas</b></a> | Layout por <a href='https://www.linkedin.com/in/gabrielm-oliveira/' target="_blank" rel='external'><b>Gabriel Modesto</b></a></p>
        </div>
      </Section>
    </footer>
  )
}

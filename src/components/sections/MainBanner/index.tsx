import logo from '@/assets/logo-seu-treino-linha-branca-breno-silva.png'
import { ArrowButton } from '@/components/Button'
export const MainBanner = () => {
  return (
    <div>
      <img src={logo} alt='logo' className='max-w-[512px]'/>
      <div className="flex items-center gap-4">
        <div>
          <h1>28 Dias para Mudar</h1>
          <p>A Revolução do seu Corpo, Mente e Estilo de Vida!</p>
        </div>
        <ArrowButton/>
      </div>
    </div>
  )
}

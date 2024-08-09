export const ReasonCards = () => {
  const CardsContent = [
    {
      title:'Método Exclusivo',
      content:'Sendo a porta de entrada do método metabólico primal, este programa foi criado para otimizar sua queima de gordura, fortalecer seus músculos e melhorar sua resistência, iniciando do zero e te levando a um bom condicionamento físico em 28 dias.'
    },
    {
      title:'Acompanhamento Diário',
      content:'Nunca se sinta sozinho nesta jornada. Nosso grupo fechado oferece suporte contínuo, motivação e dicas valiosas.'
    },
    {
      title:'Resultados Visíveis',
      content:'Em apenas 28 dias, sinta seu corpo mais leve e saudável e sua mente mais clara e focada.'
    },
  ]
  return (
    <div className='relative w-full flex flex-col items-center justify-center'>
      <div className='absolute  w-[102%] h-[70px] rounded-xl z-0 bg-orange-seu-treino '></div>
      <div className='flex z-10 relative bg-neutral-900 rounded-3xl p-8 justify-center gap-4'>
        {CardsContent.map((card, i) => <Card title={card.title} content={card.content} cardNumber={i}/>
        )}
      </div>
    </div>
  )
}


export const Card = ({title, content, cardNumber}:{title:string, content:string, cardNumber:number}) => {
  return(
    <div className="border border-orange-seu-treino rounded-3xl w-1/3 pb-2 pr-2 ml-2 mt-4">
      <div className='relative bg-white p-4 rounded-3xl text-black text-left min-h-[412px] -mt-4 -ml-2'>
        <div className="absolute border border-black  pr-[3px] pb-[3px] rounded-xl top-0 left-0">
          <div className=' text-center rounded-xl -mt-2 -ml-2 bg-orange-seu-treino p-1 font-bold text-2xl w-[42px]'>{cardNumber}</div>
        </div>
        <div className='mt-6'>
          <h3 className='font-bold text-2xl'>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
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
    <div className='flex bg-neutral-800 rounded-lg p-8 justify-center gap-4'>
      {CardsContent.map((card, i) => <Card title={card.title} content={card.content} cardNumber={i}/>
      )}
    </div>
  )
}


export const Card = ({title, content, cardNumber}:{title:string, content:string, cardNumber:number}) => {
  return(
    <div className='bg-white p-4 rounded-xl text-black text-left w-1/3 min-h-[412px]'>
      <div className='absolute text-center rounded-xl -mt-6 -ml-6 bg-orange-seu-treino p-2 font-bold text-lg w-[32px]'>{cardNumber}</div>
      <div className='mt-6'>
        <h3 className='font-bold text-2xl'>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}
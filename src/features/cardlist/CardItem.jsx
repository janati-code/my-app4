import React from 'react'

const CardItem = ({data}) => {
    
    
  return (
    <div className='bg-white border hover:border-r-8 text-black flex 
    p-10 flex-col space-y-5 items-center rounded-xl transition 
    ease-in-out delay-120 hover:scale-110 '>
        <img src ={`https://robohash.org/${data.id}`} alt={data.name} width={128} height={128} />
        <h2>{data.name}</h2>
        <p>{data.website}</p>

        </div>
  )
}

export default CardItem
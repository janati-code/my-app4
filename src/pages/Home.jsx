import React from 'react'

const Home = ({data}) => {
  return (
    <div className='flex flex-col center justify-center items-center text-black'>
      
      
      <img src={data.img} alt={data.name} className='h-36 w-36' ></img>
      <h2>{data.title}</h2>
      <h3>{data.name}</h3>
    
      </div>
 
  )
}

export default Home
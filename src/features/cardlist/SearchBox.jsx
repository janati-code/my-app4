import React from 'react'

const SearchBox = ({method}) => {
   

  return (
    <div className='flex flex-row justify-center pt-10 bg-transparent'>
        <input className='rounded-2xl border border-indigo-600 w-96 h-10 pr-6 pl-6' 
        type='text' onChange={(e) => method(e.target.value)} placeholder='Search Robo'/>
    </div>
  )
}

export default SearchBox
import React, {  useEffect, useState } from 'react';
import Circle from './Circle';
import Line from './Line';

function Levels() {
    const [steps,setsteps]=useState(1);
   
  useEffect(()=>{
    console.log(steps);
    },[]);
    
   

    const preClick=() =>
    {
        steps>1 ? setsteps(steps-1) : setsteps(1);
        console.log(steps);
    };


    const nextClick=() =>
    {
        steps<3 ? setsteps(steps+1) : setsteps(3);
        console.log(steps);
    };

  return (
  < >
  <div className=' bg-gray-400 flex flex-row justify-center m-32'>

    <Circle text={1} step={steps} />
    <Line  />
    <Circle text={2} step={steps}/>
    <Line />
    <Circle text={3} step={steps}/>
  </div>
  <div className='flex justify-center m-20'>
    <button className=
    '  m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
     onClick={preClick}
    >
    previous</button>
    <button className=
    'm-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    onClick={nextClick}
    >
        next</button>
  </div>
  </>
  );
}

export default Levels
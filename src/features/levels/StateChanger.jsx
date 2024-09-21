import React, { useState } from "react";
import Circle from "./Circle";
import Line from "./Line";

function StateChanger() {
  const w='border-white';
  const b='border-blue-500';

  const [step, setStep] = useState(1);
  const [clr,setClr]=useState([b,w,w,w]);


  const handleNextClick = () => {
   
    if(step === 1 )
      {   setStep(step + 1); setClr([b,b,w,w]);} 
    else if(step === 2 )
      {  setStep(step + 1); setClr([b,b,b,w]);} 
    else if(step === 3 )
      {  setStep(step + 1); setClr([b,b,b,b]);} 
   
  };
  
  const handlePreClick = () => {
   
    if(step === 2 )
      {   setStep(step - 1); setClr([b,w,w,w]);} 
    else if(step === 3 )
      {   setStep(step - 1); setClr([b,b,w,w]);} 
    else if(step === 4 )
      {   setStep(step - 1); setClr([b,b,b,w]);} 
    
  };


  return (
  <div className="flex flex-col items-center">
      
      <div className=' flex flex-row justify-center m-32'>

     <Circle circleclr={clr[0]} text={'0'} />
     <Line lineclr={clr[1]} />
     <Circle circleclr={clr[1]} text={'1'} />
     <Line lineclr={clr[2]} />
     <Circle circleclr={clr[2]} text={'2'} />
     <Line lineclr={clr[3]} />
     <Circle circleclr={clr[3]} text={'3'} />
 
    </div>

    <div>
      <button className='px-10 py-3 m-2 bg-blue-600 text-white   rounded-xl ' onClick={handleNextClick}>Next</button>
      <button className='px-10 py-3 m-2 bg-blue-600 text-white rounded-xl' onClick={handlePreClick}>Previous</button>
  </div>

    </div>
  );
}

export default StateChanger;
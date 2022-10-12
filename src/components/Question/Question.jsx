import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qitem from '../Qitem/Qitem';
import { useState } from 'react';
const Question = () => {
  const questionss=useLoaderData();
  const {data}=questionss;
  const {name, questions}=data;
  const [s,setS]=useState(0);
  const [s1,setS1]=useState(0);
  return (
    <div>
      <div>
      <h2 className='text-3xl'>Quize of {name}</h2>
      <div>
        <h2>Total Correct ans:={s}</h2>
        <h2>Total wrong ans:={s1}</h2>
      </div>
      </div>
    
      <div className='grid grid-cols-1 gap-5 container mx-auto'>
        {
questions.map(qitem=><Qitem qitem={qitem} key={qitem.id} ss={[s,setS]} ss1={[s1,setS1]}></Qitem>)
        }
      </div>
      
      
    
      
    </div>
  );
};

export default Question;
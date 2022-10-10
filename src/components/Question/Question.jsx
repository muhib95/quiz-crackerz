import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qitem from '../Qitem/Qitem';

const Question = () => {
  const questionss=useLoaderData();
  const {data}=questionss;
  const {name, questions}=data;
  console.log( questions);
  return (
    <div>
      <h2>Quize of {name}</h2>
      <div className='grid grid-cols-1 gap-5 container mx-auto'>
        {
questions.map(qitem=><Qitem qitem={qitem} key={qitem.id}></Qitem>)
        }
      </div>
      
    </div>
  );
};

export default Question;
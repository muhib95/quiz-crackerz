import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';


const Topics = () => {
  const exams=useLoaderData();
  const {data}=exams;
  // console.log(data);
  return (
    <div>
      <div className='grid md:grid-cols-4 container mx-auto gap-2'>
      {
        data.map(item=><Topic item={item} key={item.id}></Topic>)
      }
      </div>
    
    </div>
    
    
    
  );
};

export default Topics;
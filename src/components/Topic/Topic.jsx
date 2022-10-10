import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({item}) => {
  const {id,name,logo,total}=item;
  // console.log(item);
  return (
    <div className='container mx-auto'>
    <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
      <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
      <div className="flex justify-center p-3 items-center">
        <h3 className='mr-2'>{name}</h3>
        <h4 className='mr-2'>Total:{total}</h4>
        <Link to={`/topic/${id}`}>
        <button  type="button" className="flex items-center justify-center w-26 p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Start Practice</button></Link>
        
      </div>
    </div>
        </div>
  );
};

export default Topic;
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({option,question,trueFalseCheck}) => {

  
  return (
    <div className='border-2 p-2 bg-slate-200'>
    
    <input type="radio" value={option} name={question} onClick={()=>trueFalseCheck(option)} />{option}

    <ToastContainer />
    </div>
  );
};

export default Option;
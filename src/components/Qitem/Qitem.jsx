import React from 'react';
import Option from '../Option/Option';

const Qitem = ({qitem}) => {
  const {correctAnswer,question,options}=qitem;
  
 
  return (
    <div className='flex flex-col border-2 border-sky-500'>
<div className='flex justify-center'>
<div dangerouslySetInnerHTML={{__html:question}}></div>
<h3>Correct ans:{correctAnswer}</h3>
</div>
<div >
{
  options.map(option=><Option option={option} question={question}></Option>)
}
</div>

      
    </div>
  );
};

export default Qitem;
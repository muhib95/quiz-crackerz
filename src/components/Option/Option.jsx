import React from 'react';

const Option = ({option,question}) => {

  
  return (
    <div>
    
    <input type="radio" value={option} name={question} />{option}

   
    </div>
  );
};

export default Option;
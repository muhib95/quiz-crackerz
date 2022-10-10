import React from 'react';

const Option = ({option,question,trueFalseCheck}) => {

  
  return (
    <div>
    
    <input type="radio" value={option} name={question} onClick={()=>trueFalseCheck(option)} />{option}

   
    </div>
  );
};

export default Option;
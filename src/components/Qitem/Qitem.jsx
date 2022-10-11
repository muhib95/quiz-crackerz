import Option from '../Option/Option';

const Qitem = ({qitem,status}) => {
 
  const {correctAnswer,question,options}=qitem;
  
  const showCorrect=(ans)=>{
    alert(ans);

  }
  const trueFalseCheck=(optionCheck)=>{
   
    if(optionCheck===correctAnswer){
    
      
alert('True');
    }
    else{
      alert('False');
    }

  }
  
  return (
    <div>
          <div className='flex flex-col border-2 border-sky-500'>
<div className='flex justify-center'>
<div dangerouslySetInnerHTML={{__html:question}}></div>

<h3>Correct ans:{correctAnswer}</h3>
</div>
<div >
{
  options.map(option=><Option option={option} question={question} trueFalseCheck={trueFalseCheck}></Option>)
}
</div>

<button onClick={()=>showCorrect(correctAnswer)}>Show</button>  

    </div>
    {/* <div>
  {
    <CorrectWrong correct={correct}></CorrectWrong>
  }
</div> */}
    </div>

  );
};

export default Qitem;
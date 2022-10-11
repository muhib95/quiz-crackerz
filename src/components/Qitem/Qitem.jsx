import {EyeIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Qitem = ({qitem}) => {

 

  const {correctAnswer,question,options}=qitem;
  
  const showCorrect=(ans)=>{
    
    toast.success('correct ans: '+ans, {
      position: toast.POSITION.TOP_CENTER
    });
  }
  const trueFalseCheck=(optionCheck)=>{
   
    if(optionCheck===correctAnswer){
      toast.success('True', {
        position: toast.POSITION.TOP_CENTER
      });

    }
    else{
      toast.success('False', {
        position: toast.POSITION.TOP_CENTER
      });
    }

  }
  
 
  return (
    <div>
          <div className='flex flex-col border-2 border-sky-500'>
<div className='flex justify-center bg-red-300 text-3xl p-2'>
<div dangerouslySetInnerHTML={{__html:question}}></div>
<button  onClick={()=>showCorrect(correctAnswer)}><EyeIcon  className="h-6 w-6 text-blue-500"/></button>  

</div>
<div className='grid md:grid-cols-2 gap-1 w-85 container mx-auto p-3 bg-fuchsia-800'>
{
  options.map(option=><Option option={option} question={question} trueFalseCheck={trueFalseCheck}></Option>)
}
</div>




    </div>
    <ToastContainer />
    </div>

  );
};

export default Qitem;
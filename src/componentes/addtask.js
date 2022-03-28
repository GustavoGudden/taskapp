import React, { useState } from 'react';
import './addtask.css'
import Button from './Button'
 
const Addtask = ({handleTaskAddition}) => {
  const[inputData,setInputData] = useState("");

  const handleInputChange = (e) =>{
   setInputData(e.target.value)
  };

const handleaddTaskclick = () =>{
    handleTaskAddition(inputData) 
    setInputData('')
};


    return ( 
<div className='add-task'>
   <input 
   onChange={handleInputChange} 
   value={inputData}
   type='text' 
   className='input-add'
   />

   <div className='add-botton'>
   <Button onClick={handleaddTaskclick} >adicionar</Button>
   </div>
</div>
     );
}
 
export default Addtask;
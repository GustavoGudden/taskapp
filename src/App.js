import React, { useState } from "react";
import './App.css'
import Addtask from "./componentes/addtask";
import Tasks  from "./componentes/Tasks";
import {v4 as uuidv4} from "uuid"
const   App  = () =>{
const[tasks,setTasks] =  useState([
{
  id:"1",
  title:"estudar",
  completed:false,

},
{
  id:'2',
  title:'comer',
  completed: true,
},
{
  id:'3',
  title:'ler',
  completed: true,
}
]);

const handleTaskclick = (taskId) =>{
const newTasks = tasks.map((task) => {
  if(task.id === taskId ) return {...task,completed: !task.completed}
  return task;
});
setTasks(newTasks)

}


const handleTaskAddition = (taskTitle) =>{
  const newTasks = [
    ...tasks,
    {
    title:taskTitle,
    id: uuidv4(),
    completed:false,
   },
]
setTasks(newTasks)


}

return (
  <>
<div className="cont">
<Addtask  handleTaskAddition = {handleTaskAddition}/>
<Tasks  tasks={tasks} handleTaskclick = {handleTaskclick} />

</div>

</>

)

}


export default App
import React from 'react';
import './task.css'

const Task = ({task,handleTaskclick}) =>{
 return(
<div className='task-cont' 
style={task.completed ? {borderLeft: '6px solid chartreuse'}: {} }
>

<div className='task-title' onClick= {() => handleTaskclick(task.id)}>
{task.title}
</div>
</div>

 );
 //return <div className='task-cont'>{task.title}</div>
};
 
export default Task;
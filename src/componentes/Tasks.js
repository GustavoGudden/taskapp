import React from "react";
import Task from "./Task";



const Tasks = ({tasks,handleTaskclick}) =>{

return (
<> 
{tasks.map((task) => (
<Task  task={task} handleTaskclick = {handleTaskclick}/> 
))}

</> 

)

};

export default Tasks;
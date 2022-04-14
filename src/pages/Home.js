import ListItem from '../components/ListItem'
import TaskForm from '../components/TaskForm'
import { useEffect, useState } from 'react'
import '../styles/home.css'

function Home() {
    const [taskList,setTaskList] = useState([])
    
    const addTask = newTask => {                 
          const newTaskList = [...taskList,newTask]                  
          setTaskList(newTaskList)                
    }

    const removeTask = id => {
      const removedTaskList = [...taskList].filter(task => task.id !== id)
      setTaskList(removedTaskList)
      
    }
    
    const completeTask = id => {
      const completedTask = taskList.map(task => {
        if(task.id === id){
          task.isComplete = !task.isComplete
        }
        return task
      })
      setTaskList(completedTask)    
   }   

   useEffect(() => {   
    const tasks_ls= JSON.parse(localStorage.getItem('tasks_ls'))    
    if(tasks_ls){
      setTaskList(tasks_ls)      
    }else{
      setTaskList([
      {id:1, name:'Clean the house', isComplete:false},
      {id:2, name:'Go to the supermarket', isComplete:false}, 
      {id:3, name:'Make dinner', isComplete:false}])    
    }
  },[])

  useEffect(()=>{
      localStorage.setItem('tasks_ls', JSON.stringify(taskList))      
  },[taskList])   
    
  return (
    <div className="container">
       <h1>What do you plan for today? </h1>       
       <TaskForm onSubmit={addTask}/> 
       <div className="tasks">   
       {taskList.map((task) => (          
          <ListItem key={task.id}
            completeTask={completeTask} 
            removeTask={removeTask}  
            task={task} 
            >
          </ListItem>
       ))
       }            
      </div>      
    </div>
  );
}

export default Home;
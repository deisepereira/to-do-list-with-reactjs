import React from 'react'
import {useState} from 'react'
import '../styles/task-form.css'

export default function TaskForm(props){
    
    const [inputTask,setInputTask] = useState('')       

    const handleSubmit = e => {
        e.preventDefault()       

        if(inputTask !== '')
        {        
           props.onSubmit({
              id: Math.floor(Math.random() * 10000 + 1),
              name:inputTask,              
              isComplete:false
        })
        }                     
        setInputTask('')
    }
    
    return(
        <div className="task-form">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a new task..." value={inputTask}
                onChange={e=>setInputTask(e.target.value)}>
            </input>
            <button type="submit">Add</button>
            </form>                      
        </div>
    )
}
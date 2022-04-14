import React from 'react'
import  '../styles/list-item.css'
import {TiDelete} from 'react-icons/ti'

export default function ListItem({task,removeTask,completeTask}){

    return(
        <div className="list-item">
            <div>
              <input type="checkbox" checked={task.isComplete} onChange={()=>completeTask(task.id)} 
              title="Mark task as done"
              ></input>
              <label className={task.isComplete.toString()}>{task.name}</label> 
            </div>
            <TiDelete className="delete-button" title="Delete task" onClick={()=>removeTask(task.id)}/>                        
        </div>
    )
}
import React, { memo, useState } from 'react'
import Form from './form'

export default function Todos(props) {
    const [ tasks, setTasks ] = useState([])

    const onSubmit = (input) => {
        const task = {
            title: input,
            id: tasks.length>0 ? tasks[tasks.length-1].id+1 : 0
        }
        setTasks(val => [...val, task])
    }

    const updateTask = (task) => {
        console.log(`outside setstate`, tasks)
        setTasks(tasks => {
            console.log(`inside setstate`, tasks)
            const updatedTasks =  tasks.map(i => (
                i.id===task.id ? {...task} : {...i})
            )
            return updatedTasks
        })
    }

    return (
        <div className="todos">
            Todos
            <Form
                onSubmit={onSubmit}
            />
            <View tasks={tasks} updateTask={updateTask} />
        </div>
    )
}

const View = (props) => {
    const { tasks, updateTask } = props

    return (
        <div className="tasksContainer">
            {
                tasks && tasks.length>0 && tasks.map(task => (
                    <Task key={task.id} task={task} updateTask={updateTask} />
                ))
            }
        </div>
    )
}

const checkIfTaskHasChanged = (prevProps, nextProps) => {
    const isSameTask = ["id", "title", "count"].every(prop => prevProps.task[prop] === nextProps.task[prop])
    return isSameTask
}

const Task = memo((props) => {
    const { task, updateTask } = props

    console.log(`rerendering task`, task.title)
    return (
        <div className="task" key={task.id}>
            <button
                onClick={()=>updateTask({...task, count: (task.count || 0)+1})}
                className="counter"
            >
                {task.count || 0}
            </button>
            {task.title}
        </div>
    )
}, checkIfTaskHasChanged)
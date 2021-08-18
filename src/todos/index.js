import React, { useState, useCallback } from 'react'
import Form from './form'
import View from './tasks'

export default function Todos(props) {
    const [ tasks, setTasks ] = useState([])

    const onSubmit = (input) => {
        const task = {
            title: input,
            id: tasks.length>0 ? tasks[tasks.length-1].id+1 : 0
        }
        setTasks(val => [...val, task])
    }

    const updateTask = useCallback((task) => {
        console.log(`outside setstate`, tasks)
        setTasks(tasks => {
            console.log(`inside setstate`, tasks)
            const updatedTasks =  tasks.map(i => (
                i.id===task.id ? {...task} : {...i})
            )
            return updatedTasks
        })
    }, [tasks])

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
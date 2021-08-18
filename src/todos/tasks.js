import React, {memo} from 'react'

export const View = (props) => {
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
})

export default View
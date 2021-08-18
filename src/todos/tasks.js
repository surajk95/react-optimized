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

const checkIfTaskHasChanged = (prevProps, nextProps) => {
    const isSameTask = ["id", "title", "count"].every(prop => prevProps.task[prop] === nextProps.task[prop])

    console.log(`checking`, prevProps, nextProps,
    //prevProps.task == nextProps.task,
    prevProps.updateTask === nextProps.updateTask,
    //isSameTask
    )

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
},checkIfTaskHasChanged)

export default View
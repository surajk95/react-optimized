import React, { useCallback, useReducer } from 'react'
import Form from './form'
import View from './tasks'
import taskReducer from './reducer'

export default function Todos() {
    const [ tasks, dispatch ] = useReducer(taskReducer, [])

    const onSubmit = (input) => {
        dispatch({type: 'add', item: input})
    }

    const updateTask = useCallback((task) => {
        dispatch({type: 'update', item: task})
    }, [])

    return (
        <div className="todos">
            Todos
            <Form onSubmit={onSubmit} />
            <View tasks={tasks} updateTask={updateTask} />
        </div>
    )
}
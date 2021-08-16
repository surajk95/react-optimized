import React, { useState } from 'react'

const Form = (props) => {
    const [ input, setInput ] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        if(input.trim() !== "") {
            props.onSubmit(input)
            setInput("")
        }
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={"Enter a value"}
            />
        </form>
    )
}

export default Form
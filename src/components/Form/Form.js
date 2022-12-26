
import { useState } from 'react';

const Form = ({ addTask }) => {
    const [inputValue, setInputValue] = useState ('')
    // функция
    const handleSubmit = (event) => {
        event.preventDefault() 
        addTask(inputValue)
        event.target.reset() //очистка формы
    }

    return (
        <form onSubmit={(event) => handleSubmit (event)}>
            <input onChange={(event)=> setInputValue(event.target.value)} // событие на ввод
                type='text' 
                name='todo'>
            </input>
            <button type='submit'>ОК</button>
        </form>
    )
}

export{ Form };

import { useState } from 'react';

const Form = ({ addTask }) => {
    const [inputValue, setInputValue] = useState ('')
    
    // функция
    const handleSubmit = (event) => {
        // проверка на пустоту
        if (!inputValue){
            console.log('Заполните форму');
        }else addTask(inputValue)

        event.preventDefault() 
        console.log(inputValue)
        event.target.reset() //очистка формы
        setInputValue()
    }

    return (
        <form onSubmit={(event) => handleSubmit (event)}>
            <input onChange={(event)=> setInputValue(event.target.value)} // событие на ввод
                type='text' 
                name='todo' 
                placeholder='Введите задачу'>
            </input>
            <button type='submit'>ОК</button>
        </form>
    )
}

export{ Form };

import style from './style.module.css';
import { useState } from 'react';

const Form = ({ addTask }) => {
    const [inputValue, setInputValue] = useState ('')
    
    // функция
    const handleSubmit = (event) => {
        // проверка на пустоту
        if (!inputValue){
            console.log('Заполните форму'); // дать знать пользователю об этом (анимация, что то придумать интересное)
        }else addTask(inputValue)

        event.preventDefault() 
        event.target.reset() //очистка формы
        setInputValue()
    }

    return (
        <form onSubmit={(event) => handleSubmit (event)}>
            <input className={style.input_task} onChange={(event)=> setInputValue(event.target.value)} // событие на ввод
                type='text' 
                name='todo' 
                placeholder='Введите задачу'>
            </input>
            <button className={style.btn_input} type='submit'>ОК</button>
        </form>
    )
}

export{ Form };
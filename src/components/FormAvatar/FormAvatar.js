import style from "./style.module.css"
// import { useState } from 'react';


export function FormAvatar({ setInputValue }) {
    // console.log(url_avatar);
    const sendSubmit = (event) => {
        event.preventDefault() 
        event.target.reset() //очистка формы
        event.target.remove()
    }
    
    return (
        <>
        <div className={style.form_avatar}>
        <form nama="form_avatar" onSubmit={(event) => sendSubmit (event)}>
            <input type='url' className={style.input_avatar} placeholder='URL аватара' onChange={(event)=> setInputValue(event.target.value)}></input>
            <button className={style.btn_input_avatar} type='submit'>ОК</button>
        </form>
        </div>
        </>
    )
}
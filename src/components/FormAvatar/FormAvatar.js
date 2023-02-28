import style from "./style.module.css"
import { useState } from 'react';
// import { useEffect } from "react";



export function FormAvatar({ setInputValue }) {

    //Запись в Локальное хранилище url аватара
    const [url, setUrl] = useState();
    console.log(url);
    localStorage.setItem('url', url);
    
    // const KEY_URL_AVATAR = 'KEY_URL_AVATAR';

    
    // useEffect(() => {

    //     const urlFromLocalStor = localStorage.getItem(KEY_URL_AVATAR)
    //     const parserUrl = urlFromLocalStor ? JSON.parse(urlFromLocalStor) : null;
    //     if (parserUrl.length) {
    //         setUrl(parserUrl)
    //     }

    // }, [])

    // useEffect(() => {
    //     localStorage.setItem(KEY_URL_AVATAR, JSON.stringify(url))
    //     // setInputValue(url);
    //     // console.log(url);
    // }, [url])


    
    
    const sendSubmit = (event) => {
        event.preventDefault()
        
        // event.target.reset() //очистка формы
        event.target.remove()
    }
    
    return (
        <>
        <div className={style.form_avatar}>
        <form nama="form_avatar" onSubmit={(event) => sendSubmit (event)}>
            <input className={style.input_avatar} type='url' name='avatar' placeholder='URL аватара' onChange={(event)=> setUrl(event.target.value)}></input>
            <button className={style.btn_input_avatar} type='submit'>ОК</button>
        </form>
        </div>
        </>
    )
}


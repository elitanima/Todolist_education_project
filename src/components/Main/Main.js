

import { TaskCards } from '../TaskСards/TaskСards'
import style from './style.module.css'
// Принимаем из App.js созданую таску и выводим через функцию mapexit
export function Main({ card }) {
    return (
        <main className={style.main}>
            { card.map(elementTodo => {
                return <><TaskCards /><span>{elementTodo.taskText}</span></>
            })}
            
        </main>
    )   
}
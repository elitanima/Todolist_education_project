

import { TaskCard } from '../TaskСards/TaskСard'
import style from './style.module.css'

export function Main({ arrObjTodoTask }) {
    return (
        <main className={style.main}>
            <div className={style.grid}>
                { arrObjTodoTask.map(element => {
                    return <TaskCard objTask = {element} /> //передача задачи в компонент
                })}
            </div>
        </main>
    )   
}
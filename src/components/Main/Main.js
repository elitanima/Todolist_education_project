
import { TaskCard } from '../TaskСards/TaskСard'
import { useState } from 'react'
import style from './style.module.css'

export function Main({ arrObjTodoTask }) {
    const [viewGrid, setViewGrid] = useState(false);
    return (
        <>
                {/* изменение иконки отображения вида карточек */}
        <button className={`${style.btn_list} ${viewGrid ? style.btn_title : ''}`}  
                onClick={() => {
                    setViewGrid(!viewGrid);
                    }
                }></button>
        <main className={style.main}>
                {/* изменение вида отображения карточек */}
            <div className={`${style.grid_tile} ${viewGrid ? style.grid_list : ''}`}>
            
                { arrObjTodoTask.map(element => {
                    return <TaskCard objTask = {element} /> //передача задачи в компонент

                })}
            </div>
        </main>
        </>
    )   
}
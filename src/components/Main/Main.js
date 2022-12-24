

import { TaskCards } from '../TaskСards/TaskСards'
import style from './style.module.css'

export function Main() {
    return (
        <main className={style.main}>
            <TaskCards />
            <TaskCards />
            <TaskCards />
        </main>
    )   
}
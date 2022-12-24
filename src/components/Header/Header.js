import { Form } from '../Form/Form'
import style from './style.module.css'

export function Header({ addTask }) {
    return (
        <header className={style.header}>
            Навигация
            <Form addTask={addTask} />
        </header>
    )   
}
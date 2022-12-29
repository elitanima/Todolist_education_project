import { Avatar } from '../Avatar/Avatar'
import { Form } from '../Form/Form'
import style from './style.module.css'

export function Header({ addTask }) {
    return (
        <header className={style.header}>
            <Form addTask={addTask} />
            <Avatar />
        </header>
    )   
}
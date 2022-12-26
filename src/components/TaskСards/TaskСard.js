import style from './style.module.css'
import { useState } from 'react';



export function TaskCard({ objTask }) {
    const [taskCardOpen, setAddClass] = useState();
    return (
        // <div className={newClass ? style.newClass : style.classDefault} onClick={() => setTestClass(!newClass)}>
        <div className={`${style.taskCard} ${taskCardOpen ? style.taskCardOpen : ''}`} onClick={() => setAddClass(!taskCardOpen)}>
            <div>{objTask.taskText} {objTask.ind}</div>
            <button onClick={(event) => event.target.parentNode.remove()} >delet</button>
        </div>
    )   
}

import style from './style.module.css'
import { useState } from 'react';




export function TaskCard({ objTask }) {
    const [taskCardOpen, setAddClass] = useState(false);

    
    
    
    return (
        // <div className={newClass ? style.newClass : style.classDefault} onClick={() => setTestClass(!newClass)}>
        <div className={`${style.taskCard} ${taskCardOpen ? style.taskCardOpen : ''}`}
        // При клике на элемент добавляем класс, еще один клик или уход мышки с элемента удаляет добавленный класс 
            onClick={() => {
                setAddClass(!taskCardOpen);
                }
            }
            onMouseLeave={(event) => {
                if (taskCardOpen === true) {
                   event.target.classList.remove(`${style.taskCardOpen}`);
                   setAddClass(false);
                }
                }
            }
            >
            <button className={style.btnDeleteCard} onClick={(event) => event.target.closest('div').remove()} ></button>
            <div>{objTask.taskText} {objTask.ind}</div>
        </div>
    )   
}

import style from './style.module.css'

// более детально продумать
export function Menu() {
    const edit = "\u270E"
    return (
        <>
        <div className={style.menu}
            onClick={() => {
                console.log('Поменять пользователя');
                }
            }
        >
            Имя  
        </div>
        <div className={style.exit}
            onClick={() => {
                console.log('Выход!');
                }
            }
        >
            Выход  
        </div>
        <div className={style.edit_avatar}
            onClick={() => {
                console.log('Изменить аватар!');
                }
            }
        >
            {edit} 
        </div>
      </>
    )

}
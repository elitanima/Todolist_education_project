import { FormAvatar } from '../FormAvatar/FormAvatar';
import { useState } from 'react';
import style from './style.module.css'

// более детально продумать
export function Menu({setInputValue}) {
    const [openFormAvatar, setOpenFormAvatar] = useState(false);
    let form_avatar;
    if (openFormAvatar){ 
        form_avatar = <FormAvatar setInputValue={setInputValue} />
    }

    return (
        <>
        {form_avatar}
        <div className={style.menu}
            onClick={() => {
                console.log('Поменять пользователя');
                }
            }
        >
             
        </div>
        <div className={style.exit}
            onClick={() => {
                console.log('Выход!');
                }
            }
        >
             
        </div>
        <div className={style.edit_avatar}
            onClick={() => {
                setOpenFormAvatar(!openFormAvatar);
                }
            }
        >
        </div>
      </>
    )

}
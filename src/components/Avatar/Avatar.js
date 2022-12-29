import style from './style.module.css'
import { Menu } from '../Menu/Menu'
import { useState } from 'react';

export function Avatar() {

    const [openAvatar, setOpenAvatar] = useState();

    let view;
    // по клику на аватар отображается меню
        if (openAvatar){ 
            view = <Menu />
        }
        return (
            <>
            {view}
            {/* попробовать реализовать возможность изменения изображения аватара img_avatar */}
            <div className={`${style.avatar} ${style.img_avatar}`} 
            onClick={() => {
                setOpenAvatar(!openAvatar);
                }
            }
            > </div>
            </>
        )
}

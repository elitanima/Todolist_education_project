import style from './style.module.css'
import { Menu } from '../Menu/Menu'
import { useState } from 'react';
// import { FormAvatar } from '../FormAvatar/FormAvatar';


export function Avatar() {

    const [openAvatar, setOpenAvatar] = useState();
    // const [inputValue, setInputValue] = useState ();
    let url_avatar = localStorage.getItem('url');
    let avatar = <img className={style.img_avatar}
    src={url_avatar}
    alt ='' />
    let view;
    
    // по клику на аватар отображается меню
        if (openAvatar){ 
            view = <Menu />
        }
        // ${style.img_avatar}
        return (
            <>
            {view}
            {/* попробовать реализовать возможность изменения изображения аватара img_avatar */}
            <div className={`${style.avatar} ${style.img_avatar_default}`}
            onClick={() => {
                setOpenAvatar(!openAvatar);
                }
            }
            > 
            {avatar}
            </div>
            </>
        )
}

import style from './style.module.css'
import { Menu } from '../Menu/Menu'
import { useState } from 'react';
import { FormAvatar } from '../FormAvatar/FormAvatar';

        let url_avatar = 'https://main-cdn.sbermegamarket.ru/hlr-system/-14/947/733/168/316/34/600004192527b0.jpeg';
        let avatar = <img className={style.img_avatar}
        src={url_avatar}
        alt ='' />

export function Avatar() {

    const [openAvatar, setOpenAvatar] = useState();
    

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
            <div className={`${style.avatar}`}
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

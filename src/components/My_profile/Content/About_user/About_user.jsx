import React from 'react';
import _css from './About_user.module.css';
import './../../../../App.css';

const ABOUT_USER = () => {
    return <div className={_css.About_U}>
        


            <div className="flex_row">
                <div className="left_side">
                    <div className={_css.__sex}><span>Пол:</span></div>
                    <div className={_css.__birthday}><span>День Рождения:</span></div>
                    <div className={_css.__city}><span>Родной город:</span></div>
                </div>
                <div className='right_side'>
                    <div className={_css.sex}><a href="#s">Мужской</a></div>
                    <div className={_css.birthday}><a href="#s">18 ноября 1980г</a></div>
                    <div className={_css.city}><a href="#s">Торонто</a></div>
                </div>
            </div>
        </div>
    
}

export default ABOUT_USER; 
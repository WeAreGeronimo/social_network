import React from 'react';
import './../../../../App.css';
import './Personal_info.css';


const PERSONAL_INFO = () => {
    return <div className="Personal_Info"><div className='div_informations'>Личная информация:</div>
        
        <div className='flex_row'>
                <div className='left_side'>
                    <div className="activity"><span>Деятельность:</span></div>
                    <div className="interests"><span>Интересы:</span></div>
                    <div className="favorites_musics"><span>Любимая музыка:</span></div>
                    <div className="favorites_films"><span>Любимые фильмы:</span></div>
                    <div className="favorites_quotes"><span>Любимые цитаты:</span></div>
                </div>
                <div className='right_side'>
                    <div className="activity_user"><a href="#s">...</a></div>
                    <div className="interests_user"><a href="#s">...</a></div>
                    <div className="favorites_musics_user"><a href="#s">Alternative Metal</a></div>
                    <div className="favorites_films"><a href="#s">Самый быстрый индиан</a></div>
                    <div className="favorites_quotes">Возможности превыше границ</div>
                </div>
            </div>
        </div>
            
        
    
}

export default PERSONAL_INFO; 
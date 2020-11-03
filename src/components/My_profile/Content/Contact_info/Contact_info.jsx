import React from 'react';
import './../../../../App.css';


const CONTACT_INFO = () => {
    return <div className="Contact_Info"><div className='div_informations'>Контактная информация:</div>
        
        <div className='flex_row'>
                <div className='left_side'>
                    <div className="Town"><span>Город:</span></div>
                    <div className="Mobile_number"><span>Моб. телефон:</span></div>
                    <div className="home_number"><span>Дом. телефон:</span></div>
                    <div className="icq"><span>ICQ:</span></div>
                    <div className="site"><span>Веб-сайт:</span></div>
                </div>
                <div className='right_side'>
                    <div className="town_user"><a href="#s">Торонто</a></div>
                    <div className="mobile_number_user"><a href="#s">0 800 000 000г</a></div>
                    <div className="home_number_user"><a href="#s">22 33 22</a></div>
                    <div className="icq_user"><a href="#s">222 111 222 </a></div>
                    <div className="site_user"><a href="#s">https://...</a></div>
                </div>
            </div>
        </div>
            
        
    
}

export default CONTACT_INFO; 
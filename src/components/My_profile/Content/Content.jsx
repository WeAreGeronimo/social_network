import React from 'react';
import About_user from './About_user/About_user';
import Contact_info from './Contact_info/Contact_info';
import _css from './Content.module.css';
import Personal_info from './Personal_info/Personal_info';
import Wall from './Wall/Wall';


const CONTENT = (props) => {
    return <div className={_css.content}>
        

            <div className={_css.name_surname}>Павел Дуров</div>
            <div className={_css.status}>Привет, мир!</div>
            <div className={_css.timer_status}>Обновлено очень давно</div>
            <div className={_css.grey_line}></div>
            <div className={_css.informations_about_user}></div>
            <About_user />
            <div className={_css.information_bar}>Информация</div>
            <Contact_info />
            <Personal_info />
            <div className={_css.information_bar}>Стена<span className={_css.write_on_wall}>Написать на стене</span></div>
            <Wall postData = {props.postData} addPost={props.addPost}/>
            
            
        </div>
    
}

export default CONTENT; 
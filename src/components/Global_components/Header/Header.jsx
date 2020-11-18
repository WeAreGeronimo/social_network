import React from 'react';
import { NavLink } from 'react-router-dom';
import _css from './Header.module.css';



const HEADER = (props) => {
   return <header className={_css.header}><img src="https://oprosmoskva.ru/wp-content/uploads/vk-logo-psd.png" />
   <div className={_css.users}><NavLink to="/users">Пользователи</NavLink></div>
   <div className={_css.login}> {props.isAuth ? props.login : <NavLink to="/login">Войти</NavLink> }</div>
   
 
   </header>;
}

export default HEADER;
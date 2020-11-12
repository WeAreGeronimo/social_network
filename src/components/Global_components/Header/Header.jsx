import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Users from '../../Users/Users';
import _css from './Header.module.css';



const HEADER = () => {
   return <header className={_css.header}><img src="https://oprosmoskva.ru/wp-content/uploads/vk-logo-psd.png" />
   <div className={_css.users}><NavLink to="/users">Пользователи</NavLink></div>
   
 
   </header>;
}

export default HEADER;
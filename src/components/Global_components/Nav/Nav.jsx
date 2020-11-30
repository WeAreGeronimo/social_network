import React from 'react';
import { NavLink } from 'react-router-dom';
import _css from './Nav.module.css';

const NAV = () => {
  return (
    <nav className={_css.nav}>
      <div className={_css.nav_elements}>
        <NavLink to="/profile">Моя Страница</NavLink>
      </div>
      <div className={_css.nav_elements}>
        <NavLink to="/friends">Мои Друзья</NavLink>
      </div>
      <div className={_css.nav_elements}>
        <a href="#s">Мои Фотографии</a>
      </div>
      <div className={_css.nav_elements}>
        <NavLink to="/videos">Мои Видеозаписи</NavLink>
      </div>
      <div className={_css.nav_elements}>
        <NavLink to="/audios">Мои Аудиозаписи</NavLink>
      </div>
      <div className={_css.nav_elements}>
        <NavLink to="/dialogs">Мои Сообщения</NavLink>
      </div>
      <div className={_css.nav_elements}>
        <a href="#s">Мои Заметки</a>
      </div>
      <div className={_css.nav_elements}>
        <a href="#s">Мои Группы</a>
      </div>
      <div className={_css.nav_elements}>
        <a href="#s">Мои Закладки</a>
      </div>
      <div className={_css.nav_elements}>
        <a href="#s">Мои Настройки</a>
      </div>
    </nav>
  );
};

export default NAV;

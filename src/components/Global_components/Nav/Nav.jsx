import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import _css from './Nav.module.css';

const NAV = (props) => {
  return (
    <nav className={_css.nav}>
      <div className={_css.nav_elements}>
        <NavLink to={`/profile/${props.AuthUserId}`}>
          Моя Страница
        </NavLink>
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

const mapStateToProps = (state) => ({
  AuthUserId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, {}),
  withRouter,
  withAuthRedirect,
)(NAV);

import React from 'react';
import { NavLink } from 'react-router-dom';
import _css from './UsersItem.module.css';
import noAvatar from '../../../assets/no_avatar.jpg';

const UsersItem = (props) => {
  return (
    <div className={_css.item}>
      <div className={_css.avatar_block}>
        <div className={_css.avatar}>
          <NavLink to={`/profile/${props.id}`}>
            <img
              alt=""
              src={props.large != null ? props.large : noAvatar}
            />
          </NavLink>
        </div>

        <div className={_css.rating}>{props.rating}</div>
      </div>
      <div className={_css.information_block}>
        <div className={_css.name_surname_age}>
          <a href="#s" alt="">
            {props.name} {props.surname}
          </a>
          , props.age
        </div>
        <div className={_css.location}>props.city, props.country</div>
        <div className={_css.status}>{props.status}</div>
        <div className={_css.add}>
          {props.followed ? (
            <button
              type="button"
              disabled={props.followingInProgress.some(
                (id) => id === props.id,
              )}
              onClick={() => {
                props.followUnfollow(props.id, 'UNFOLLOW');
              }}
            >
              Удалить
            </button>
          ) : (
            <button
              type="button"
              disabled={props.followingInProgress.some(
                (id) => id === props.id,
              )}
              onClick={() => {
                props.followUnfollow(props.id, 'FOLLOW');
              }}
            >
              Добавить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersItem;

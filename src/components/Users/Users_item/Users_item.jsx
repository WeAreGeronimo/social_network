import React from 'react';
import _css from './Users_item.module.css';
import noAvatar from "../../../assets/no_avatar.jpg"
import { NavLink } from 'react-router-dom';

const Users_item = (props) => {

    return (<div className={_css.item}>
        <div className={_css.avatar_block}>
            <div className={_css.avatar}>
                <NavLink to={'/profile/'+ props.id}>
                <img  alt=""  src={props.large != null ? props.large : noAvatar} />
                </NavLink>
                </div>
                
            <div className={_css.rating}>{props.rating}</div>
        </div>
        <div className={_css.information_block}>
    <div className={_css.name_surname_age}><a href="#s"  alt="" >{props.name} {props.surname}</a>, props.age</div>
    <div className={_css.location}>props.city, props.country</div>
            <div className={_css.status}>{props.status}</div>
            <div className={_css.add}>{ 
            props.follow ? <button onClick={() => {props.toggle_follow(props.id)}}>Удалить</button> : <button onClick={() => {props.toggle_follow(props.id)}}>Добавить</button>
            }</div>
        </div>

    </div>
    )

}
 
 export default Users_item;
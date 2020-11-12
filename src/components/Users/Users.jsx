import React from 'react';
import _css from './Users.module.css';
import Users_item from './Users_item/Users_item';

const Users = (props) => {

   
    let Users_list = props.users.map(u => <Users_item 
        toggle_follow={props.toggle_follow} 
        id={u.id} follow={u.follow} 
        name={u.name} surname={u.surname} 
        city={u.location.city} 
        country={u.location.country} 
        status={u.status} age={u.age} 
        rating={u.rating}  /> )
    

    return( <div className={_css.users_wrapper}>
        <div className={_css.search}><textarea placeholder="Поиск" className={_css.textarea_search}></textarea></div>
        
        {Users_list}

        <button>Показать еще</button>


        </div>
    )
 }
 
 export default Users ;
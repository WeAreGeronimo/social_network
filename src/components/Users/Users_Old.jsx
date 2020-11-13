import * as axios from 'axios';
import React from 'react';
import _css from './Users.module.css';
import Users_item from './Users_item/Users_item';



const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get(' https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
                // debugger;
                console.log(response);
            })
            // props.setUsers([
            //     { id: 1, follow: true, name: 'Danial', surname: 'Daniall', status: 'Что-то тут', location: { city: 'Симферополь', country: 'Россия' }, age: 22, rating: 94 },
            //     { id: 2, follow: true, name: 'Гектор', surname: 'Гик', status: 'Где я?', location: { city: 'Симферополь', country: 'Россия' }, age: 23, rating: 2 },
            //     { id: 3, follow: false, name: 'Витя', surname: 'Витя', status: 'Что-то тут', location: { city: 'Быдгощ', country: 'Польша' }, age: 26, rating: 88 },
            // ]);
        }
    }


    let Users_list = props.users.map(u => <Users_item 
        toggle_follow={props.toggle_follow} 
        id={u.id} follow={u.follow} 
        name={u.name} surname={u.surname} 
        // city={u.location.city} 
        // country={u.location.country} 
        status={u.status} age={u.age} 
        rating={u.rating}
        large={u.photos.large}  /> )
    

    return( <div className={_css.users_wrapper}>
        <div className={_css.search}><textarea placeholder="Поиск" className={_css.textarea_search}></textarea></div>
        <button onClick={getUsers}>Загрузить пользователей</button>
        
        {Users_list}

        <button>Показать еще</button>


        </div>
    )
 }
 
 export default Users ;
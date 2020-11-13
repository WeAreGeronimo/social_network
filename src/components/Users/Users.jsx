import * as axios from 'axios';
import React from 'react';
import _css from './Users.module.css';
import Users_item from './Users_item/Users_item';



class Users extends React.Component {

    constructor(props) {
        super(props);


        axios.get(' https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }





    render() {

        let Users_list = this.props.users.map(u => <Users_item
            toggle_follow={this.props.toggle_follow}
            id={u.id} follow={u.follow}
            name={u.name} surname={u.surname}
            // city={u.location.city} 
            // country={u.location.country} 
            status={u.status} age={u.age}
            rating={u.rating}
            large={u.photos.large} />)

        return (<div className={_css.users_wrapper}>
            <div className={_css.search}><textarea placeholder="Поиск" className={_css.textarea_search}></textarea></div>

            {Users_list}

            <button>Показать еще</button>


        </div>
        )
    }
}

export default Users;
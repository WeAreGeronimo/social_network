import React from "react";
import Preloader from "../Global_components/preloader/Preloader";
import _css from './Users.module.css';
import UsersItem from './Users_item/Users_item';



let Users = (props) => {

    let Users_list = props.users.map(u => <UsersItem
        toggle_follow={props.toggle_follow}
        id={u.id} follow={u.follow}
        name={u.name} surname={u.surname}
        // city={u.location.city} 
        // country={u.location.country} 
        status={u.status} age={u.age}
        rating={u.rating}
        large={u.photos.large} />)

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        
        let pages = [];


    if (props.currentPage === 1) {
        for (let i = props.currentPage; i <= props.currentPage + 3; i++) {
            pages.push(i);
        }

    } else if(props.currentPage === 2){
        for (let i = props.currentPage - 1; i <= props.currentPage + 3; i++) {
            pages.push(i);
        }
    } else if (props.currentPage >=3) {
        for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
            pages.push(i);
        }
    }






    return (<div className={_css.users_wrapper}>
        <div className={_css.search}><textarea placeholder="Поиск" className={_css.textarea_search}></textarea></div>

        {pages.map(p => {
            return <span className={props.currentPage === p ? _css.selectedPage : ''} onClick={() => { props.pageChanger(p) }}> {p} </span>
        })}

        {props.isFetching ? <Preloader /> : null}

        {Users_list}

        <button>Показать еще</button>


    </div>
    )
}

export default Users
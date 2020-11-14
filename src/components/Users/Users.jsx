import React from 'react';
import _css from './Users.module.css';
import UsersItem from './Users_item/Users_item';
import * as axios from 'axios';



class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }



    pageChanger = (pageNumber) => {
        this.props.setCurrPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);

        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        
        let pages = [];
        
        let a = 5;

        // for (let i=1; i <= pagesCount; i++) {
        //     pages.push(i);
        // }

        for (let i=1; i <= this.props.whatsPageAreShow; i++) {
            pages.push(i);
        }

        let Users_list = this.props.users.map(u => <UsersItem
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
            <span onClick={() => {this.props.setWhatsPageAreShow(a-5)}}>пред.5___</span>
            
            {pages.map(p => {
                return <span className={this.props.currentPage === p ? _css.selectedPage : ''} onClick={()=>{this.pageChanger(p)}}> {p} </span>
            })}

            <span onClick={() => {this.props.setWhatsPageAreShow(a+5)}}>___след.5 </span>

            {Users_list}

            <button>Показать еще</button>


        </div>
        )
    }
}

export default Users;
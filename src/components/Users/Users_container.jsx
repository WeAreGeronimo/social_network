import React from 'react';
import { connect } from 'react-redux';
import { toggle_follow, setUsers, setCurrPage, setTotalUsersCount, toggleFetching } from '../../redux/users_reducer';
import * as axios from 'axios';
import Users from './Users';



class UsersAPIComponent extends React.Component {


    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }



    pageChanger = (pageNumber) => {
        this.props.toggleFetching(true);
        this.props.setCurrPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleFetching(false);
            this.props.setUsers(response.data.items);

        })
    }



    render() {
        return(
        
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                pageChanger={this.pageChanger} 
                isFetching={this.props.isFetching}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {

        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        whatsPageAreShow: state.usersPage.whatsPageAreShow,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         toggle_follow: (userId) => {
//             dispatch(toggleFollow_AC(userId));
//         },

//         setUsers: (users) => {
//             dispatch(setUsers_AC(users));
//         },

//         setCurrPage: (pageNumber) => {
//             dispatch(setCurrentPage_AC(pageNumber));
//         },

//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCount_AC(totalCount));
//         },

//         toggleFetching: (isFetching) => {
//             dispatch(ToggleFetching_AC(isFetching));
//         }

//     }
// }


export default connect(mapStateToProps, {
    toggle_follow,
    setUsers,
    setCurrPage,
    setTotalUsersCount,
    toggleFetching,
})(UsersAPIComponent);


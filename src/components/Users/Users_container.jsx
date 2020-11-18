import React from 'react';
import { connect } from 'react-redux';
import { toggle_follow, setUsers, setCurrPage, setTotalUsersCount, toggleFetching, toggleIsFollowedProgress} from '../../redux/users_reducer';
import { usersAPI } from './../api/api';
import Users from './Users';




class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleFetching(false);
            this.props.setUsers(response.items);
            console.log(response.items)
            this.props.setTotalUsersCount(response.totalCount);
        })
    }

    pageChanger = (pageNumber) => {
        this.props.toggleFetching(true);
        this.props.setCurrPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.toggleFetching(false);
            this.props.setUsers(response.items);

        })
    }
    
    render() {
      
        return (
            
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                pageChanger={this.pageChanger}
                isFetching={this.props.isFetching}
                toggle_follow={this.props.toggle_follow}
                followed={this.props.users.followed}
                followingInProgress={this.props.followingInProgress}
                toggleIsFollowedProgress={this.props.toggleIsFollowedProgress}
                 />
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    toggle_follow,
    setUsers,
    setCurrPage,
    setTotalUsersCount,
    toggleFetching,
    toggleIsFollowedProgress
})(UsersAPIComponent);


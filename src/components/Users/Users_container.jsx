import React from 'react';
import { connect } from 'react-redux';
import { toggle_follow, setCurrPage, toggleIsFollowedProgress, getUsers, followUnfollow} from '../../redux/users_reducer';
import Users from './Users';




class UsersAPIComponent extends React.Component {

    componentDidMount() {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
        }
    

    pageChanger = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrPage(pageNumber);
        }
 
    
    render() {
      
        return (
            
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                pageChanger={this.pageChanger}
                followed={this.props.users.followed}
                followingInProgress={this.props.followingInProgress}
                followUnfollow={this.props.followUnfollow}
                isFetching={this.props.isFetching}
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
    setCurrPage,
    toggleIsFollowedProgress,
    getUsers,
    followUnfollow
})(UsersAPIComponent);


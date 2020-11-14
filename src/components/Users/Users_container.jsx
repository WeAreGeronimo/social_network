import { connect } from 'react-redux';
import { setCurrentPage_AC, setPagesCount_AC, setTotalUsersCount_AC, setUsers_AC, toggleFollow_AC } from '../../redux/users_reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {

        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        whatsPageAreShow: state.usersPage.whatsPageAreShow,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggle_follow: (userId) => {
            dispatch(toggleFollow_AC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsers_AC(users));
        },

        setCurrPage: (pageNumber) => {
            dispatch(setCurrentPage_AC(pageNumber));
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCount_AC(totalCount));
        },

        setWhatsPageAreShow: (w) => {
            dispatch(setPagesCount_AC(w));
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
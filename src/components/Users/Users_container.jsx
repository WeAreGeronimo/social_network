
import { connect } from 'react-redux';
import { setUsers_AC, toggleFollow_AC } from '../../redux/users_reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggle_follow: (userId) => {
            dispatch(toggleFollow_AC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsers_AC(users));
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);

import { connect } from 'react-redux';
import Friends from './Friends';




const mapStateToProps = (state) => {
    return {
        friendData: state.profilePage.friendData
    }
}
 
const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer; 
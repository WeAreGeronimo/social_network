
import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../../redux/profile_reducer';
import Wall from './Wall';


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}


const Wall_container = connect(mapStateToProps, {addPost, updateNewPostText })(Wall);

export default Wall_container; 
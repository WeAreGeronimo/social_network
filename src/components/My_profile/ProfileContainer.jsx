import React from 'react';
import './my_profile.css';
import MyProfile from './my_profile';
import { connect } from 'react-redux';
import {addPost, updateNewPostText, getUserProfile} from './../../redux/profile_reducer'
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {userId = 12604}
        this.props.getUserProfile(userId);
    }

    render() {
       return <MyProfile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
 profile: state.profilePage.profile,
 isAuth: state.auth.isAuth,
})

let WithUrlDataContComp = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    addPost,
    updateNewPostText,
    getUserProfile
})(WithUrlDataContComp);
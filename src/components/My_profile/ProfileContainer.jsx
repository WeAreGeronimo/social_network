import React from 'react';
import './my_profile.css';

import MyProfile from './my_profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile, addPost, updateNewPostText} from './../../redux/profile_reducer'
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {userId = 12604}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
       return <MyProfile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
 profile: state.profilePage.profile
})

let WithUrlDataContComp = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile,
    addPost,
    updateNewPostText
})(WithUrlDataContComp);
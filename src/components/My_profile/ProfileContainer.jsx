import React from 'react';
import MyProfile from './my_profile';
import { connect } from 'react-redux';
import {addPost, getUserProfile} from './../../redux/profile_reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
           
            userId = this.props.AuthUserId
        }

        this.props.getUserProfile(userId)
    }

    render() {
      
       return <MyProfile {...this.props} profile={this.props.profile} />
    }
}


let mapStateToProps = (state) => ({
 profile: state.profilePage.profile,
 AuthUserId: state.auth.userId,
 isAuth: state.auth.isAuth

})


export default compose(
    connect(mapStateToProps, {addPost,getUserProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
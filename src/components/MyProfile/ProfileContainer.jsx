import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  addPost,
  getStatusFromAPI,
  getUserProfile,
} from '../../redux/profile_reducer';
import { withAuthRedirect } from '../HOC/withAuthRedirect';

import MyProfile from './MyProfile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.match.params.userId !== prevProps.match.params.userId
    ) {
      this.refreshProfile();
    }
  }

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.AuthUserId;
    }

    this.props.getUserProfile(userId);
    this.props.getStatusFromAPI(userId);
  }

  render() {
    return <MyProfile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  AuthUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    addPost,
    getUserProfile,
    getStatusFromAPI,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);

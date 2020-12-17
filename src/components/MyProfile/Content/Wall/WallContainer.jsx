import { connect } from 'react-redux';
import {
  addPost,
  putPostInApi,
} from '../../../../redux/profile_reducer';
import Wall from './Wall';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    AuthUserId: state.auth.userId,
    profile: state.profilePage.profile,
  };
};

const WallContainer = connect(mapStateToProps, {
  addPost,
  putPostInApi,
})(Wall);

export default WallContainer;

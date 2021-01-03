import { connect } from 'react-redux';
import {
  addPost,
  putPostInApi,
  ToggleLikeWall,
  ToggleLikeComment,
  putCommentPostInApi,
  DeleteCommentTh,
  getNextWallPosts,
} from '../../../../redux/profile_reducer';
import Wall from './Wall';
import { beautifulWhenTimeText } from '../../../../common/TimeTextFunc';

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
  ToggleLikeWall,
  ToggleLikeComment,
  putCommentPostInApi,
  DeleteCommentTh,
  getNextWallPosts,
  beautifulWhenTimeText,
})(Wall);

export default WallContainer;

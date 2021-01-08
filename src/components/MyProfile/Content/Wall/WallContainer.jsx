import { connect } from 'react-redux';
import {
  addPost,
  putPostInApi,
  ToggleLikeWall,
  ToggleLikeComment,
  putCommentPostInApi,
  DeleteCommentTh,
  getNextWallPosts,
  getNextPostsComments,
  DeletePostTh,
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
  getNextPostsComments,
  DeletePostTh,
})(Wall);

export default WallContainer;

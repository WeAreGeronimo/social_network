import { profileAPI } from '../components/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_LIKED_UNLIKED_POST = 'UPDATE_LIKED_UNLIKED_POST';
const UPDATE_COMMENT_ARRAY = 'UPDATE_COMMENT_ARRAY';
const UPDATE_LIKE_ARRAY_COMMENTS = 'UPDATE_LIKE_ARRAY_COMMENTS';
const DELETE_COMMENT = 'DELETE_COMMENT';

const initialState = {
  posts: [],

  friendData: [
    { id: 1, name: 'Егор', surname: 'Крид' },
    { id: 2, name: 'Edem', surname: 'Qirimli' },
    { id: 3, name: 'Витя', surname: 'Витя' },
    { id: 4, name: 'Гектор', surname: 'Гик' },
    { id: 5, name: 'Климентий', surname: 'Ворошилов' },
    { id: 6, name: 'Апостол', surname: 'Первый' },
  ],

  profile: null,

  statusH: {
    statusText: null,
    timeCreation: null,
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        ...state.posts,
        posts: [...state.posts, ...action.payload.posts],
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.payload };
    }

    case SET_STATUS: {
      return {
        ...state,
        statusH: {
          statusText: action.statusText,
          timeCreation: action.timeCreation,
        },
      };
    }

    case UPDATE_LIKED_UNLIKED_POST: {
      return {
        ...state,
        // eslint-disable-next-line no-unused-expressions,array-callback-return
        posts: state.posts.map((el) => {
          if (el.postId === action.payload.postId) {
            el.likes = action.payload.likes;
          }
          return el;
        }),
      };
    }

    case UPDATE_LIKE_ARRAY_COMMENTS: {
      return {
        ...state,
        posts: state.posts.map((el) => {
          el.comments.map((elcom) => {
            if (elcom.commentId === action.payload.commentId) {
              elcom.likes = action.payload.likes;
            }
            return elcom;
          });
          return el;
        }),
      };
    }

    case UPDATE_COMMENT_ARRAY: {
      return {
        ...state,
        posts: state.posts.map((el) => {
          if (el.postId === action.payload.postId) {
            return {
              ...el,
              comments: [
                ...el.comments,
                {
                  commentId: action.payload.commentId,
                  name: action.payload.nameComment,
                  nickname: action.payload.nicknameComment,
                  surname: action.payload.surnameComment,
                  whenTime: action.payload.whenTimeComment,
                  textComment: action.payload.textComment,
                  likes: action.payload.likesComment,
                },
              ],
            };
          }
          return el;
        }),
      };
    }

    case DELETE_COMMENT: {
      return {
        ...state,
        posts: state.posts.map((el) => {
          if (el.postId === action.payload.postId) {
            return {
              ...el,
              comments: el.comments.filter((comment) => {
                return comment.commentId !== action.payload.commentId;
              }),
            };
          }
          return el;
        }),
      };
    }

    default:
      return state;
  }
};

export const addPost = (posts) => ({
  type: ADD_POST,
  payload: { posts },
});

export const setUserProfile = (payload) => ({
  type: SET_USER_PROFILE,
  payload,
});

export const AddOrDeleteLike = (payload) => ({
  type: UPDATE_LIKED_UNLIKED_POST,
  payload,
});

export const AddOrDeleteLikeComment = (payload) => ({
  type: UPDATE_LIKE_ARRAY_COMMENTS,
  payload,
});

export const updateStatusInState = (statusText, timeCreation) => ({
  type: SET_STATUS,
  statusText,
  timeCreation,
});

export const updateStatusTimeInState = (timeCreation) => ({
  type: SET_STATUS,
  timeCreation,
});

export const AddComment = (
  commentId,
  nameComment,
  nicknameComment,
  surnameComment,
  textComment,
  whenTimeComment,
  likesComment,
  postId,
) => ({
  type: UPDATE_COMMENT_ARRAY,
  payload: {
    commentId,
    whenTimeComment,
    textComment,
    likesComment,
    nameComment,
    nicknameComment,
    surnameComment,
    postId,
  },
});

export const DeleteComment = (commentId, postId) => ({
  type: DELETE_COMMENT,
  payload: {
    commentId,
    postId,
  },
});

export const DeleteCommentTh = (commentId, postId) => {
  return (dispatch) => {
    profileAPI.DeleteCommentFromApi(commentId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(
          DeleteComment(
            response.data.apiData.commentId,
            response.data.apiData.postId,
          ),
        );
      }
    });
  };
};

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data.apiData));
      if (response.data.apiData.posts.length !== 0) {
        dispatch(addPost(response.data.apiData.posts));
      }
    });
  };
};

export const getNextWallPosts = (userIdc, nPostc) => {
  return (dispatch) => {
    profileAPI
      .GetNextWallPostsFromApi(userIdc, nPostc)
      .then((response) => {
        // eslint-disable-next-line array-callback-return
        dispatch(addPost(response.data.apiData.posts));
      });
  };
};

export const getStatusFromAPI = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(
        updateStatusInState(
          response.data.apiData.status.statusText,
          response.data.apiData.status.timeCreation,
        ),
      );
    });
  };
};

export const setNewStatus = (text, time) => {
  return (dispatch) => {
    profileAPI.updateStatus(text, time).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(updateStatusInState(text));
      }
    });
  };
};

export const putPostInApi = (text, whenTime, whoseWall) => {
  return (dispatch) => {
    profileAPI
      .putNewPostOnWall(whenTime, text, whoseWall)
      .then((response) => {
        if (response.data.resultCode === 0) {
          debugger;
          dispatch(
            addPost(
              response.data.apiData.postedPost.name,
              response.data.apiData.postedPost.surname,
              response.data.apiData.postedPost.postId,
              response.data.apiData.postedPost.text,
              response.data.apiData.postedPost.whenTime,
              response.data.apiData.postedPost.likes,
              response.data.apiData.postedPost.nickname,
              response.data.apiData.postedPost.comments,
            ),
          );
        }
      });
  };
};

export const putCommentPostInApi = (
  text,
  whenTime,
  whoseWall,
  postId,
) => {
  return (dispatch) => {
    profileAPI
      .putNewCommentOnWallPost(text, whenTime, whoseWall, postId)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(
            AddComment(
              response.data.apiData.postedComment.commentId,
              response.data.apiData.postedComment.name,
              response.data.apiData.postedComment.nickname,
              response.data.apiData.postedComment.surname,
              response.data.apiData.postedComment.textComment,
              response.data.apiData.postedComment.whenTime,
              response.data.apiData.postedComment.likes,
              postId,
            ),
          );
        }
      });
  };
};

export const ToggleLikeWall = (value) => {
  return (dispatch) => {
    profileAPI.likeToggleWall(value).then((response) => {
      dispatch(AddOrDeleteLike(response.data.apiData));
    });
  };
};

export const ToggleLikeComment = (value) => {
  return (dispatch) => {
    profileAPI.likeToggleComment(value).then((response) => {
      dispatch(AddOrDeleteLikeComment(response.data.apiData));
    });
  };
};

export const PutCommentInApi = (
  postId,
  from,
  whenTime,
  textComment,
) => {
  return (dispatch) => {
    profileAPI
      .PutNewComment(postId, from, whenTime, textComment)
      .then((response) => {
        dispatch(
          AddComment(
            response.data.apiData.postedComment.commentId,
            response.data.apiData.postedComment.whenTime,
            response.data.apiData.postedComment.textComment,
            response.data.apiData.postedComment.likes,
            response.data.apiData.postedComment.name,
            response.data.apiData.postedComment.nickname,
            response.data.apiData.postedComment.surname,
          ),
        );
      });
  };
};

export default profileReducer;

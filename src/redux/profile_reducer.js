import { profileAPI } from '../components/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_LIKED_UNLIKED_POST = 'UPDATE_LIKED_UNLIKED_POST';
const UPDATE_COMMENT_ARRAY = 'UPDATE_COMMENT_ARRAY';
const UPDATE_LIKE_ARRAY_COMMENTS = 'UPDATE_LIKE_ARRAY_COMMENTS';
const DELETE_COMMENT = 'DELETE_COMMENT';
const DELETE_POST = 'DELETE_POST';
const UPDATE_COUNT_COMMENTS = 'UPDATE_COUNT_COMMENTS';

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
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          ...state.posts,
          posts: [...state.posts, ...action.payload],
        };
      } else if (!Array.isArray(action.payload)) {
        return {
          ...state,
          ...state.posts,
          posts: [...state.posts, action.payload],
        };
      }
      return state;
    }

    case DELETE_POST: {
      debugger;
      // eslint-disable-next-line no-return-assign
      return {
        ...state,
        ...(state.profile.postsLength = action.payload.postsLength),
        posts: state.posts.filter((post) => {
          return post.postId !== action.payload.deletedPost.postId;
        }),
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
          if (Array.isArray(action.payload.comments)) {
            action.payload.comments.map((comment) => {
              if (comment.postId === el.postId) {
                el.comments = [...el.comments, comment];
                return el;
              }
              return el;
            });
          } else if (!Array.isArray(action.payload.comments)) {
            if (action.payload.comments.postId === el.postId) {
              return {
                ...el,
                commentsCountInApi: action.payload.commentsCountInApi,
                comments: [...el.comments, action.payload.comments],
              };
            }
            return el;
          }
          return el;
        }),
      };
    }

    case DELETE_COMMENT: {
      debugger;
      return {
        ...state,
        posts: state.posts.map((el) => {
          if (el.postId === action.payload.postId) {
            return {
              ...el,
              commentsCountInApi: action.payload.commentsCountInApi,
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

export const addPost = (payload) => ({
  type: ADD_POST,
  payload,
});

export const deletePost = (payload) => ({
  type: DELETE_POST,
  payload,
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

export const AddComment = (payload) => ({
  type: UPDATE_COMMENT_ARRAY,
  payload,
});

export const DeleteComment = (payload) => ({
  type: DELETE_COMMENT,
  payload,
});

export const DeleteCommentTh = (commentId, postId) => {
  return (dispatch) => {
    profileAPI.DeleteCommentFromApi(commentId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(DeleteComment(response.data.apiData));
      }
    });
  };
};

export const DeletePostTh = (postId) => {
  return (dispatch) => {
    profileAPI.DeletePostFromApi(postId).then((response) => {
      dispatch(deletePost(response.data.apiData));
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
        dispatch(addPost(response.data.apiData.posts));
      });
  };
};

export const getNextPostsComments = (postIdc, nCommentsc) => {
  return (dispatch) => {
    profileAPI
      .GetNextWallCommentsFromApi(postIdc, nCommentsc)
      .then((response) => {
        dispatch(AddComment(response.data.apiData));
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
          dispatch(addPost(response.data.apiData.postedPost));
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
          dispatch(AddComment(response.data.apiData));
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

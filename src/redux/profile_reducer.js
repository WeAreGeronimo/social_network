import { profileAPI } from '../components/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_LIKE_ARRAY = 'UPDATE_LIKE_ARRAY';
const UPDATE_COMMENT_ARRAY = 'UPDATE_COMMENT_ARRAY';

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
        posts: [
          ...state.posts,
          {
            name: action.name,
            surname: action.surname,
            nickname: action.nickname,
            idWhoLeft: action.idWhoLeft,
            comments: action.comments,
            postId: action.postId,
            text: action.text,
            whenTime: action.whenTime,
            likes: action.likes,
          },
        ],
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
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

    case UPDATE_LIKE_ARRAY: {
      return {
        ...state,
        // eslint-disable-next-line no-unused-expressions,array-callback-return
        ...state.posts.map((el) => {
          if (el.postId === action.postId) {
            // eslint-disable-next-line no-unused-expressions,no-sequences
            el.name,
              el.surname,
              el.nickname,
              el.idWhoLeft,
              el.postId,
              el.text,
              el.whenTime,
              action.likes;
          }
        }),
      };
    }

    case UPDATE_COMMENT_ARRAY: {
      return {
        ...state,
        // eslint-disable-next-line no-unused-expressions,array-callback-return
        ...state.posts,
        ...state.posts.comments,
        comments: [
          {
            commentId: action.commentId,
            whenTime: action.whenTimeComment,
            textComment: action.textComment,
            likes: action.likesComment,
            name: action.nameComment,
            nickname: action.nicknameComment,
            surname: action.surnameComment,
          },
        ],
      };
    }

    default:
      return state;
  }
};

export const addPost = (
  name,
  surname,
  postId,
  text,
  whenTime,
  likes,
  nickname,
  comments,
) => ({
  type: ADD_POST,
  name,
  surname,
  postId,
  text,
  whenTime,
  likes,
  nickname,
  comments,
});

// export const addNameNicknameSurnameInPost = (name, nickname, surname) => ({
//   type: SET_USER_PROFILE,
//   profile,
// })

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const AddOrDeleteLike = (postId, likes) => ({
  type: UPDATE_LIKE_ARRAY,
  postId,
  likes,
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
  whenTimeComment,
  textComment,
  likesComment,
  nameComment,
  nicknameComment,
  surnameComment,
) => ({
  type: ADD_POST,
  commentId,
  whenTimeComment,
  textComment,
  likesComment,
  nameComment,
  nicknameComment,
  surnameComment,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data.apiData));
      // eslint-disable-next-line array-callback-return
      response.data.apiData.posts.map((posts) => {
        dispatch(
          addPost(
            posts.name,
            posts.surname,
            posts.postId,
            posts.text,
            posts.whenTime,
            posts.likes,
            posts.nickname ? posts.nickname : null,
            posts.comments,
          ),
        );
      });
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
          dispatch(
            addPost(
              response.data.apiData.postedPost.name,
              response.data.apiData.postedPost.surname,
              response.data.apiData.postedPost.postId,
              response.data.apiData.postedPost.text,
              response.data.apiData.postedPost.whenTime,
              response.data.apiData.postedPost.likes,
              response.data.apiData.postedPost.nickname
                ? response.data.apiData.postedPost.nickname
                : null,
            ),
          );
        }
      });
  };
};

export const ToggleLikeWall = (value) => {
  return (dispatch) => {
    profileAPI.likeToggle(value).then((response) => {
      dispatch(
        AddOrDeleteLike(
          response.data.apiData.postId,
          response.data.apiData.likes,
        ),
      );
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

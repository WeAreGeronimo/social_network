import { profileAPI } from '../components/api/api';
import { beautifulWhenTimeText } from '../TimeTextFunc';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_NEW_TIME_STATUS = 'SET_NEW_TIME_STATUS';

const initialState = {
  postData: [
    {
      id: 1,
      name: 'Егор почти Крид',
      text_post: 'я наконец-то свободен от блэкстар',
      time: 'сегодня в 20:31',
      likes_q: 201,
    },
    {
      id: 2,
      name: 'Егор почти Крид',
      text_post: 'да здравствует реакт',
      time: 'сегодня в 20:12',
      likes_q: 7,
    },
    {
      id: 3,
      name: 'Егор почти Крид',
      text_post: 'да здравствует реакт2',
      time: 'сегодня в 20:12',
      likes_q: 7,
    },
  ],

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
      const timeNow = new Date().toLocaleTimeString().slice(0, -3);
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: 3,
            name: 'Егор почти Крид',
            text_post: action.newText,
            time: `сегодня в ${timeNow}`,
            likes_q: 0,
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

    default:
      return state;
  }
};

export const addPost = (newText) => ({ type: ADD_POST, newText });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const updateStatusInState = (statusText, timeCreation) => ({
  type: SET_STATUS,
  statusText,
  timeCreation,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getStatusFromAPI = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(
        updateStatusInState(
          response.data.status.statusText,
          response.data.status.timeCreation,
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

export default profileReducer;

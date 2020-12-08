// eslint-disable-next-line import/no-unresolved
import { stopSubmit } from 'redux-form';
import {
  RegistrationAPI,
  headerAPI,
  loginAPI,
} from '../components/api/api';
import { toggleFetching } from './users_reducer';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

export const setAuth = () => (dispatch) => {
  dispatch(toggleFetching(true));
  return headerAPI.getAuth().then((response) => {
    if (response.resultCode === 0) {
      dispatch(toggleFetching(false));
      const { id, email } = response.data;
      dispatch(setAuthUserData(id, email, true));
    }
  });
};

export const setAuthFromLogin = (email, password, rememberMe) => (
  dispatch,
) => {
  dispatch(toggleFetching(true));
  loginAPI
    .login(email, password, rememberMe, true)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuth());
      } else {
        const message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : 'Что-то пошло не так...';
        dispatch(stopSubmit('loginForm', { _error: message }));
      }
    });
};

export const logOut = () => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    loginAPI.logout().then((response) => {
      if (response.resultCode === 0) {
        dispatch(toggleFetching(false));
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export const CreateNewUser = (
  emailData,
  passData,
  nameData,
  surnameData,
) => (dispatch) => {
  dispatch(toggleFetching(true));
  return RegistrationAPI.registration(
    emailData,
    passData,
    nameData,
    surnameData,
  ).then((response) => {
    if (response.resultCode === 0) {
      dispatch(toggleFetching(false));
    }
  });
};

export default authReducer;

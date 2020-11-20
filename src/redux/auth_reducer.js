import { headerAPI } from "../components/api/api";
import { toggleFetching } from "./users_reducer";

const SET_USER_DATA = "SET_USER_DATA";





const initialState = {
userId: null,
email: null,
login: null,
isAuth: false

}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default: return state;
  }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login}});

export const setAuth = () => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    headerAPI.getAuth().then(response => {
      if (response.resultCode === 0) {
        dispatch(toggleFetching(false));
        let { id, email, login } = response.data
        dispatch(setAuthUserData(id, email, login,));
      }
    })
  }
}







export default authReducer;
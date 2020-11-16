// const FOLLOW = "FOLLOW";
// const UNFOLLOW = "UNFOLLOW";
const SET_CURR_PAGE = 'SET_CURR_PAGE';
const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';


const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,

}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, follow: !u.follow }
          }
          return u;
        }),
      }

    case SET_USERS: {
      return { ...state, users: action.users }
    }

    case SET_CURR_PAGE: {
      return { ...state, currentPage: action.currentPage}
    }

    case SET_USER_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount}
    }

    case TOGGLE_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }


    default: return state;
  }
}

export const toggle_follow = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrPage = (currentPage) => ({ type: SET_CURR_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_USER_TOTAL_COUNT, totalUsersCount })
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })





export default usersReducer;
// const FOLLOW = "FOLLOW";
// const UNFOLLOW = "UNFOLLOW";
const SET_CURR_PAGE = 'SET_CURR_PAGE';
const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USER_TOTAL_COUNT = 'SET_USER TOTAL_COUNT';
const WHATS_PAGE_ARE_SHOW = "WHATS_PAGE_ARE_SHOW";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  whatsPageAreShow: 5,

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

    case WHATS_PAGE_ARE_SHOW: {
      return { ...state, whatsPageAreShow: action.whatsPageAreShow}
    }
    default: return state;
  }
}

export const toggleFollow_AC = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsers_AC = (users) => ({ type: SET_USERS, users })
export const setCurrentPage_AC = (currentPage) => ({ type: SET_CURR_PAGE, currentPage })
export const setTotalUsersCount_AC = (totalUsersCount) => ({ type: SET_USER_TOTAL_COUNT, totalUsersCount })
export const setPagesCount_AC = (whatsPageAreShow) => ({ type: WHATS_PAGE_ARE_SHOW, whatsPageAreShow })




export default usersReducer;
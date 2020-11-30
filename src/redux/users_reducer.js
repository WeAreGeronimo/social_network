import { usersAPI } from '../components/api/api';

const SET_CURR_PAGE = 'SET_CURR_PAGE';
const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWED_PROGRESS = 'TOGGLE_IS_FOLLOWED_PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, users: action.users };
    }

    case SET_CURR_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_USER_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }

    case TOGGLE_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case TOGGLE_IS_FOLLOWED_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFollowedProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(
              (id) => id !== action.userId,
            ),
      };
    }

    default:
      return state;
  }
};

export const toggleFollow = (userId) => ({
  type: TOGGLE_FOLLOW,
  userId,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrPage = (currentPage) => ({
  type: SET_CURR_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_USER_TOTAL_COUNT,
  totalUsersCount,
});
export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});
export const toggleIsFollowedProgress = (
  isFollowedProgress,
  userId,
) => ({
  type: TOGGLE_IS_FOLLOWED_PROGRESS,
  isFollowedProgress,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  // this thunk creater
  return (dispatch) => {
    dispatch(toggleFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(toggleFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
    });
  };
};

export const followUnfollow = (userId, fOrUnf) => {
  // this thunk creater
  return (dispatch) => {
    dispatch(toggleIsFollowedProgress(true, userId));
    usersAPI.F_UNF_User_toggle(userId, fOrUnf).then((response) => {
      dispatch(toggleIsFollowedProgress(false, userId));
      if (response.resultCode === 0) {
        dispatch(toggleFollow(userId));
      }
    });
  };
};

export default usersReducer;

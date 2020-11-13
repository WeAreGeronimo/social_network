// const FOLLOW = "FOLLOW";
// const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

const initialState = {
  users: [],
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
    // case FOLLOW:
    //     return {
    //         ...state,
    //         users: state.users.map(u => {
    //             if (u.id === action.userId) {
    //                 return { ...u, follow: true }
    //             }
    //             return u;
    //         })
    //     }
    // case UNFOLLOW:
    //     return {
    //         ...state,
    //         users: state.users.map(u => {
    //             if (u.id === action.userId) {
    //                 return { ...u, follow: false }
    //             }
    //             return u;
    //         })
    //     }

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] }
    }
    default: return state;
  }
}

export const toggleFollow_AC = (userId) => ({ type: TOGGLE_FOLLOW, userId })
// export const follow_AC = (userId) => { return { type: FOLLOW, userId } }
// export const unfollow_AC = (userId) => { return { type: UNFOLLOW, userId } }
export const setUsers_AC = (users) => ({ type: SET_USERS, users })

export default usersReducer;
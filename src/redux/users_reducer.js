// const FOLLOW = "FOLLOW";
// const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';



let initialState = {
  users: [
  { id: 1, follow: true, name: 'Danial', surname: 'Daniall', status: 'Что-то тут', location: {city: 'Симферополь', country: 'Россия'}, age: 22, rating: 94 },
  { id: 2, follow: true, name: 'Гектор', surname: 'Гик', status: 'Где я?', location: {city: 'Симферополь', country: 'Россия'}, age: 23, rating: 2},
  { id: 3, follow: false, name: 'Витя', surname: 'Витя', status: 'Что-то тут', location: {city: 'Быдгощ', country: 'Польша'}, age: 26, rating: 88},
],


}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: !u.follow}
                    }
                    return u;
                })
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default: return state;
    }
}

export const toggleFollow_AC = (userId) => { return { type: TOGGLE_FOLLOW, userId } }
// export const follow_AC = (userId) => { return { type: FOLLOW, userId } }
// export const unfollow_AC = (userId) => { return { type: UNFOLLOW, userId } }
export const setUsers_AC = (users) => { return { type: SET_USERS, users } }

  
export default usersReducer;
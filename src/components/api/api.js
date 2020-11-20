import * as axios from 'axios';
const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW'
const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

let instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
    headers: { 'API-KEY': 'e1ab8fbd-d883-4160-929d-5733c631fc3f' },

})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    F_UNF_User_toggle(id = 1, type) {
        switch (type) {
            case FOLLOW: {
                return instance.post(`follow/${id}`).then(response => response.data)
            }
            case UNFOLLOW: {
                return instance.delete(`follow/${id}`).then(response => response.data)
            }
            default: return
        }
    }
}

export const headerAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data)
       
    }
}

export const profilerAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+userId).then(response => response)
    }
}

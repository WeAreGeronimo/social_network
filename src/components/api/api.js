import * as axios from 'axios';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/'; // TODO clean this file
const BASE_URL_MYAPI = 'http://api.app.com:2222/';

// const instance = axios.create({
//   withCredentials: true,
//   baseURL: BASE_URL,
//   headers: { 'API-KEY': 'e1ab8fbd-d883-4160-929d-5733c631fc3f' },
// });

const instanceMyAPI = axios.create({
  baseURL: BASE_URL_MYAPI,
  withCredentials: true,
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instanceMyAPI
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  F_UNF_User_toggle(id = 1, type) {
    switch (type) {
      case FOLLOW: {
        return instanceMyAPI
          .post(`follow/${id}`)
          .then((response) => response.data);
      }
      case UNFOLLOW: {
        return instanceMyAPI
          .delete(`follow/${id}`)
          .then((response) => response.data);
      }
      default:
        return null;
    }
  },
};

export const headerAPI = {
  getAuth() {
    return instanceMyAPI.get(`api/auth/me`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instanceMyAPI
      .get(`profile/${userId}`)
      .then((response) => response);
  },

  getStatus(userId) {
    return instanceMyAPI
      .post(`profile/status/`, { userId })
      .then((response) => response);
  },

  updateStatus(status, timeCreation) {
    return instanceMyAPI
      .put(`profile/status/`, { status, timeCreation })
      .then((response) => response);
  },

  getTimeWhenStatusSet(userId) {
    return instanceMyAPI
      .put(`profile/status/time`, { userId })
      .then((response) => response);
  },

  putNewPostOnWall(whenTime, text, whoseWall) {
    return instanceMyAPI
      .put(`profile/api/newpost`, { whenTime, text, whoseWall })
      .then((response) => response);
  },

  putNewCommentOnWallPost(textComment, whenTime, whoseWall, postId) {
    return instanceMyAPI
      .put(`profile/api/newcomment`, {
        textComment,
        whenTime,
        whoseWall,
        postId,
      })
      .then((response) => response);
  },

  getNamesForWall(array) {
    return instanceMyAPI
      .post(`profile/post/names`, { arraysId: array })
      .then((response) => response);
  },

  likeToggleWall(value) {
    return instanceMyAPI
      .post(`profile/api/liketogle`, { postId: value })
      .then((response) => response);
  },

  likeToggleComment(value) {
    return instanceMyAPI
      .post(`profile/api/comment/liketogle`, { commentId: value })
      .then((response) => response);
  },

  PutNewComment(postId, from, whenTime, textComment) {
    return instanceMyAPI
      .put(`profile/api/newcomment`, {
        postId,
        from,
        whenTime,
        textComment,
      })
      .then((response) => response);
  },

  GetNextWallPostsFromApi(userIdc, nPostc) {
    return instanceMyAPI
      .post(`profile/api/nextwallposts`, {
        userId: userIdc,
        nPost: nPostc,
      })
      .then((response) => response);
  },

  GetNextWallCommentsFromApi(postIdc, nCommetnsc) {
    return instanceMyAPI
      .post(`profile/api/nextcomments`, {
        postId: postIdc,
        nComments: nCommetnsc,
      })
      .then((response) => response);
  },

  DeleteCommentFromApi(comId) {
    return instanceMyAPI
      .post(`profile/api/deletecomment`, {
        commentId: comId,
      })
      .then((response) => response);
  },

  DeletePostFromApi(postIdc) {
    return instanceMyAPI
      .post(`profile/api/deletepost`, {
        postId: postIdc,
      })
      .then((response) => response);
  },
};

export const loginAPI = {
  login(emailData, passData) {
    return instanceMyAPI.post(`api/login`, {
      email: emailData,
      password: passData,
    });
  },
  logout() {
    return instanceMyAPI.post(`api/auth/logout`);
  },
};

export const RegistrationAPI = {
  registration(emailData, passData, nameData, surnameData) {
    return instanceMyAPI.post(`api/register`, {
      email: emailData,
      password: passData,
      name: nameData,
      surname: surnameData,
    });
  },
};

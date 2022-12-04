import axiosClient, { axiosClientPrivate } from "./axiosClient";

const url = "/users/";
const userApi = {
  // getAllUsers: () => axiosClientPrivate.get(`${url}/getAllUser`),
  getUserProfile: (email) => axiosClient.get(`${url}${email}`),
  searchUser: (q, page = 0, limit = 5) =>
    axiosClientPrivate.get(`${url}search?q=${q}&page=${page}&limit=${limit}`),
  updateUserProfile: (data) => axiosClientPrivate.put(url, data),
  followUser: (id) => axiosClientPrivate.patch(`${url}follow/${id}`),
  unFollowUser: (id) => axiosClientPrivate.patch(`${url}unfollow/${id}`),
  getAllUnFollow: (page = 0, limit = 3) =>
    axiosClientPrivate.get(url + "getAllUnFollow"),
  followUser: (id) => axiosClientPrivate.patch(`${url}follow/${id}`, {}),
};

export const {
  // getAllUsers,
  getUserProfile,
  searchUser,
  updateUserProfile,
  followUser,
  getAllUnFollow,
  unFollowUser,
} = userApi;

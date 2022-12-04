import axiosClient, { axiosClientPrivate } from "./axiosClient";

const url = "/users/";
const userApi = {

export const {
	getAllUsers: () => axiosClientPrivate.get(url),
	getUserProfile: (email) => axiosClient.get(`${url}${email}`),
	searchUser: (q, page = 0, limit = 10) =>
	axiosClientPrivate.get(`${url}/search?q=${q}&page=${page}&limit=${limit}`),
	updateUserProfile: (data) => axiosClientPrivate.put(url, data),
	followUser: (id) => axiosClientPrivate.patch(`${url}follow/${id}`, {}),
  unFollowUser: (id) => axiosClientPrivate.patch(`${url}unfollow/${id}`),
	addTopics: (topics) => axiosClientPrivate.patch(`${url}/topics`, { topics }),
	getOwnTopics: () => axiosClientPrivate.get(`${url}/topics`),
};

export const {
	getAllUsers,
	getUserProfile,
	searchUser,
	updateUserProfile,
	followUser,
  getAllUnFollow,
  unFollowUser,
	addTopics,
	getOwnTopics,
} = userApi;

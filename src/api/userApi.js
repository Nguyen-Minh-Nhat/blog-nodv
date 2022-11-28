import axiosClient, { axiosClientPrivate } from './axiosClient';

const url = 'users/';
const userApi = {
	getAllUsers: () => axiosClientPrivate.get(url),
	getUserProfile: (email) => axiosClient.get(`${url}${email}`),
	searchUser: (q, page = 0, limit = 5) =>
		axiosClientPrivate.get(`${url}search?q=${q}&page=${page}&limit=${limit}`),
	updateUserProfile: (data) => axiosClientPrivate.put(url, data),
};

export const { getAllUsers, getUserProfile, searchUser, updateUserProfile } =
	userApi;

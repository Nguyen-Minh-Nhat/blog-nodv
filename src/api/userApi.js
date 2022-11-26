import axiosClient, { axiosClientPrivate, setHeader } from './axiosClient';

const url = 'users/';
const userApi = {
	getAllUsers: () => axiosClientPrivate.get(url, { headers: setHeader() }),
	getUserProfile: (email) => axiosClient.get(`${url}${email}`),
	searchUser: (q, page = 0, limit = 5) =>
		axiosClientPrivate.get(`${url}search?q=${q}&page=${page}&limit=${limit}`, {
			headers: setHeader(),
		}),
};

export const { getAllUsers, getUserProfile, searchUser } = userApi;

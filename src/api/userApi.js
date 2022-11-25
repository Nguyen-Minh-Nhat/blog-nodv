import axiosClient, { axiosClientPrivate, setHeader } from './axiosClient';

const url = 'users/';
const userApi = {
	getAllUsers: () => axiosClientPrivate.get(url, { headers: setHeader() }),
	getUserProfile: (email) => axiosClient.get(`${url}${email}`),
};

export const { getAllUsers, getUserProfile } = userApi;

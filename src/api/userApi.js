import { axiosClientPrivate, setHeader } from './axiosClient';

const url = 'users/';
const userApi = {
	getAllUsers: () => axiosClientPrivate.get(url, { headers: setHeader() }),
};

export const { getAllUsers } = userApi;

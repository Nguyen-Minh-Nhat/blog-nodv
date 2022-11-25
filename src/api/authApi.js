import { axiosClientPrivate, setHeader } from './axiosClient';
const url = '/auth';
const authApi = {
	getAuthInfo: () => {
		return axiosClientPrivate.get(url + '/info', { headers: setHeader() });
	},
};

export const { getAuthInfo } = authApi;

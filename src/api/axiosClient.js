import axios from 'axios';
import { setIsCallLogin } from '../redux/slices/authSlice';
import store from '../redux/store';
import jwt_decode from 'jwt-decode';
import { appRoutes } from '../routes/AppRoutes';
import { logout } from '../redux/slices/userSlice';
const baseURL = process.env.REACT_APP_API_URL;
const axiosClient = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'multipart/form-data',
		'content-type': 'application/json',
	},
	credentials: 'include',
	withCredentials: true,
});

export const axiosClientPrivate = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'multipart/form-data',
		'content-type': 'application/json',
	},
	credentials: 'include',
	timeout: 60000,
	withCredentials: true,
});

axiosClientPrivate.interceptors.request.use(
	async (config) => {
		const accessToken = store.getState().user.data.accessToken;
		config.headers['Authorization'] = `Bearer ${accessToken}`;
		if (accessToken === null) {
			store.dispatch(setIsCallLogin(true));
		} else {
			const decodeToken = jwt_decode(accessToken);
			const today = new Date();
			if (decodeToken.exp < today.getTime() / 1000) {
				window.location.href = appRoutes.AUTH_LOGIN;
				store.dispatch(logout);
				// try {
				// 	const res = await refreshToken();
				// 	store.dispatch(setAccessToken(res.data.access_token));
				// 	config.headers['Authorization'] = res.data.access_token;
				// } catch (error) {
				// 	store.dispatch(logout());
				// 	toast.error('expire login');
				// }
			}
		}

		return config;
	},
	(error) => {
		return Promise.reject(error.response.data);
	}
);

axiosClientPrivate.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		console.log('error from axios client', error);
		return Promise.reject(error.response.data);
	}
);

axiosClient.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		return Promise.reject(error.response.data);
	}
);

export default axiosClient;

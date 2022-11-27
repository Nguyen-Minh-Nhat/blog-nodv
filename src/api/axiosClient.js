import axios from 'axios';
import store from '../redux/store';
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
	withCredentials: true,
});

axiosClientPrivate.interceptors.request.use(
	async (config) => {
		const accessToken = store.getState().user.data.accessToken;
		config.headers['Authorization'] = `Bearer ${accessToken}`;
		// const decodeToken = jwtDecode(accessToken);
		// const today = new Date();

		// if (decodeToken.exp < today.getTime() / 1000) {
		// 	try {
		// 		const res = await refreshToken();
		// 		store.dispatch(setAccessToken(res.data.access_token));
		// 		config.headers['Authorization'] = res.data.access_token;
		// 	} catch (error) {
		// 		store.dispatch(logout());
		// 		toast.error('expire login');
		// 	}
		// }
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default axiosClient;

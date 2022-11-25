import axiosClient, { axiosClientPrivate, setHeader } from './axiosClient';

const url = '/posts';

const postApi = {
	getPosts: () => axiosClient.get(url),
	getPostById: (id) => axiosClient.get(`${url}${id}`),
	createPost: (post) =>
		axiosClientPrivate.post(url, post, { headers: setHeader() }),
};

export const { getPosts, createPost, getPostById } = postApi;

export default postApi;

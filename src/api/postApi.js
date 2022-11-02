import axiosClient from './axiosClient';

const url = 'post/';

const postApi = {
	getAllPosts: () => axiosClient.get(url + 'get-all-posts'),
};

export const { getAllPosts } = postApi;

export default postApi;

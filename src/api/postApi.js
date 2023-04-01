import axiosClient, { axiosClientPrivate } from './axiosClient';

import axios from 'axios';
import { generateParamsString } from '../utils';

const url = '/posts';

const postApi = {
	getPosts: ({
		page = 0,
		limit = 5,
		topic = null,
		title = null,
		user = null,
		sort = null,
		direction = null,
		isFollowing = null,
	}) => {
		const params = {
			page,
			limit,
			topic,
			user,
			title,
			isFollowing,
			sort,
			direction,
		};
		const paramsString = generateParamsString(params);
		return axiosClient.get(`${url}?${paramsString}`);
	},

	getPostsByFollowing: ({ page = 0, limit = 5 }) => {
		const params = {
			page,
			limit,
		};
		const paramsString = generateParamsString(params);
		return axiosClientPrivate.get(`${url}/following?${paramsString}`);
	},

	getPostsTrending: (limit = 6) =>
		axiosClient.get(`${url}/trending?limit=${limit}`),

	getPostById: (id) => axiosClient.get(`${url}/${id}`),
	getPostsByUserId: (id) => axiosClient.get(`${url}/user/${id}`),

	getOwnedPosts: ({ page = 0, limit = 5, isPublish = null }) => {
		const params = {
			page,
			limit,
			isPublish,
		};
		const paramsString = generateParamsString(params);
		return axiosClientPrivate.get(`${url}/me?${paramsString}`);
	},

	createPost: (post) => axiosClientPrivate.post(url, post),

	updatePost: (post) => {
		return axiosClientPrivate.put(`${url}/${post.id}`, post);
	},

	deletePost: (id) => axiosClientPrivate.delete(`${url}/${id}`),

	publishPost: (id) => axiosClientPrivate.patch(`${url}/${id}/publish`, null),

	unPublishPost: (id) =>
		axiosClientPrivate.patch(`${url}/${id}/unpublished`, null),

	likePost: (id) => axiosClientPrivate.patch(`${url}/${id}/like`, null),

	unLikePost: (id) => axiosClientPrivate.patch(`${url}/${id}/unlike`, null),

	hidePost: (id) => axiosClientPrivate.patch(`/blackLists/${id}`, null),
	unHidePost: (id) => axiosClientPrivate.delete(`/blackLists/${id}`, null),

	getListPostHided: () => axiosClientPrivate.get('/blackLists/list'),

	getPostsRecommend: async (id) => {
		const response = await axios.get(
			`${process.env.REACT_APP_SERVER_RECOMMEND_URL}/api/posts/${id}/recommend`,
		);
		return response.data;
	},
};

export const {
	getPosts,
	createPost,
	getPostById,
	getOwnedPosts,
	deletePost,
	publishPost,
	unPublishPost,
	likePost,
	unLikePost,
	updatePost,
	getPostsTrending,
	getPostsByUserId,
	hidePost,
	unHidePost,
	getListPostHided,
	getPostsRecommend,
	getPostsByFollowing,
} = postApi;

export default postApi;

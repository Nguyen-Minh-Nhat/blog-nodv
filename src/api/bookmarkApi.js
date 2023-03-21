import { axiosClientPrivate } from './axiosClient';
import { generateParamsString } from '../utils';

const url = '/bookmarks';

const bookmarkApi = {
	getBookmarkByUserId: () => axiosClientPrivate.get(`${url}/user`),
	getBookmark: ({ page = 0, limit = 5 }) => {
		const params = {
			page,
			limit,
		};
		const paramsString = generateParamsString(params);
		return axiosClientPrivate.get(`${url}?${paramsString}`);
	},
	getPostIdsBookmark: () => axiosClientPrivate.get(`${url}/list`),
	updatePostToBookmark: (postId) =>
		axiosClientPrivate.patch(`${url}/${postId}`),
};

export const {
	getBookmarkByUserId,
	updatePostToBookmark,
	getPostIdsBookmark,
	getBookmark,
} = bookmarkApi;

export default bookmarkApi;

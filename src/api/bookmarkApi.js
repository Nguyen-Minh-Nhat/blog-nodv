import axiosClient, { axiosClientPrivate } from "./axiosClient";

const url = "/bookmarks";

const bookmark = {
  // getPosts: () => axiosClient.get(url),

  // getPostById: (id) => axiosClient.get(`${url}/${id}`),

  // getOwnedPosts: (isPublish) =>
  // 	axiosClientPrivate.get(
  // 		`${url}/me${!!isPublish ? '?isPublish=' + isPublish : ''}`
  // 	),

  // createPost: (post) => axiosClientPrivate.post(url, post),

  // deletePost: (id) => axiosClientPrivate.delete(`${url}/${id}`),

  // publishPost: (id) => axiosClientPrivate.patch(`${url}/${id}/publish`, null),

  // unpublishPost: (id) =>
  // 	axiosClientPrivate.patch(`${url}/${id}/unpublished`, null),

  // likePost: (id) => axiosClientPrivate.patch(`${url}/${id}/like`, null),

  // unLikePost: (id) => axiosClientPrivate.patch(`${url}/${id}/unlike`, null),
  // getBookmarksByUserId: async () => {
  //   let response = await axiosClientPrivate.get(`${url}/user`);
  //   return response.data;
  // },
  getBookmarksByUserId: () => axiosClientPrivate.get(`${url}/user`),
};

export const { getBookmarksByUserId } = bookmark;

export default bookmark;

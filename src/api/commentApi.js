import axiosClient, { axiosClientPrivate } from "./axiosClient";

const url = "/comments";
const commentApi = {
  getComment: (postId) => axiosClient.get(`posts/${postId}${url}`),
  createComment: (comment) => axiosClientPrivate.post(`${url}`, comment),
};
export const { getComment, createComment } = commentApi;
export default commentApi;

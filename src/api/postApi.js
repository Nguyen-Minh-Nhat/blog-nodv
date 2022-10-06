import axiosClient from './axiosClient';

const url = 'post/';

const getAllPosts = () => axiosClient.get(url + 'get-all-posts');

export { getAllPosts };

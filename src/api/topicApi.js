import axiosClient from './axiosClient';

const url = '/topics';
const topicApi = {
	searchTopics: (q) => axiosClient.get(`${url}/search?q=${q}`),
};

export const { searchTopics } = topicApi;

import axiosClient, { axiosClientPrivate } from "./axiosClient";

const url = "/topics";
const topicApi = {
  getTopics: () => {
    return axiosClientPrivate.get(url);
  },
  searchTopics: (q) => axiosClient.get(`${url}/search?q=${q}`),
};

export const { getTopics, searchTopics } = topicApi;

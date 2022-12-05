import axiosClient, { axiosClientPrivate } from "./axiosClient";

const url = "/users";
const userApi = {
  getAllUsers: () => axiosClientPrivate.get(url),
  getUserProfile: (email) => axiosClient.get(`${url}${email}`),
  searchUser: (q, page = 0, limit = 10) =>
    axiosClientPrivate.get(`${url}/search?q=${q}&page=${page}&limit=${limit}`),
  updateUserProfile: (data) => axiosClientPrivate.put(url, data),
  followUser: (id) => axiosClientPrivate.patch(`${url}/follow/${id}`, {}),
  updateCountNotifications: ({ userId, isIncrease }) => {
    console.log("isIncrease", isIncrease, userId);
    return axiosClientPrivate.patch(
      `${url}/${userId}${!!isIncrease ? "?isIncrease=" + isIncrease : ""}`
    );
  },
};

export const {
  getAllUsers,
  getUserProfile,
  searchUser,
  updateUserProfile,
  followUser,
  updateCountNotifications,
} = userApi;

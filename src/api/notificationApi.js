import { axiosClientPrivate } from "./axiosClient";

const url = "/notifications";

const notificationApi = {
  getNotifications: (isRead) =>
    axiosClientPrivate.get(
      `${url}${isRead != null ? `?isRead=${isRead}` : ""}`
    ),
  setIsRead: (id) => axiosClientPrivate.patch(`${url}/${id}`),
  createNotification: (notification) =>
    axiosClientPrivate.post(`${url}`, notification),
};

export const setNotificationRead = async (id) => {
  const response = await axiosClientPrivate.patch(`${url}/${id}`, null);
  return response.data;
};

export const { getNotifications, setIsRead, createNotification } =
  notificationApi;

export default notificationApi;

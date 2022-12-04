import { NotificationType } from "../config/dataType";

export const callApiCreateNotification = (data, type, callApi, userId) => {
  let notification = { type: type };
  switch (type) {
    case NotificationType.LIKE:
      notification.link = `/post/${data.id}`;
      notification.receiverId = `${data.userId}`;
      if (userId !== data.userId) callApi.mutate(notification);
      break;
    case NotificationType.LIKECOMMENT:
      notification.link = `/post/${data.postId}`;
      notification.receiverId = `${data.userId}`;
      if (userId !== data.userId) callApi.mutate(notification);
      break;
    case NotificationType.COMMENT:
      notification.link = `/post/${data.postId}`;
      notification.receiverId = `${data.postUserId}`;
      if (userId !== data.postUserId) callApi.mutate(notification);
      break;
    case NotificationType.REPLYCOMMENT:
      notification.link = `/post/${data.postId}`;
      notification.receiverId = `${data.commentParentUserId}`;
      if (userId !== data.commentParentUserId) callApi.mutate(notification);
      break;
    default:
      notification.link = `/user/${data.id}`;
      notification.receiverId = `${data.id}`;
      if (userId !== data.id) callApi.mutate(notification);
  }

  return notification;
};

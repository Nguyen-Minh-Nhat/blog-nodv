import { NotificationType } from "../config/dataType";

export const generationNotificationByData = (data, type) => {
  let notification = { type: type };
  switch (type) {
    case NotificationType.LIKE:
      console.log(data.id);
      notification.link = `/post/${data.id}`;
      notification.receiverId = `${data.userId}`;
      break;
    case NotificationType.LIKECOMMENT:
      notification.link = `/post/${data.postId}`;
      notification.receiverId = `${data.userId}`;
      break;
    case NotificationType.COMMENT:
      notification.link = `/post/${data.postId}`;
      notification.receiverId = `${data.postUserId}`;
      break;
    case NotificationType.REPLYCOMMENT:
      notification.link = `/post/${data.postId}`;
      notification.receiverId = `${data.commentParentUserId}`;
      break;
    default:
      notification.link = `/user/${data.id}`;
      notification.receiverId = `${data.id}`;
  }

  return notification;
};

import { useState } from "react";
import { useMutation } from "react-query";
import Notification from "../..";
import { setNotificationRead } from "../../../../api/notificationApi";

const NotificationList = ({ notificationList }) => {
  const setNotificationReadMutation = useMutation(setNotificationRead);
  return (
    <div className="flex flex-col gap-2">
      {notificationList.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          setNotificationReadMutation={() =>
            setNotificationReadMutation.mutate(notification.id)
          }
        />
      ))}
    </div>
  );
};

export default NotificationList;

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getNotifications } from "../../api/notificationApi";
import PageWithTitle from "../../components/PageWithTitle";
import { NotificationList } from "../../features/notification";

const NotificationStatus = [
  { id: 0, title: "All" },
  { id: 1, title: "Unread" },
  { id: 2, title: "Read" },
];
const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState(null);
  const socket = useSelector((state) => state.socket.data);
  const userId = useSelector((state) => state.user?.data?.info?.id);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleReceiveNotificationSocket = (payload) => {
    const newNotification = JSON.parse(payload.body);
    const newNotifications = [...notifications];
    newNotifications.unshift(newNotification);

    setNotifications(newNotifications);
  };

  console.log("notifications ", notifications);

  useEffect(() => {
    const topic = `/topic/notifications/${userId}/new`;
    if (socket) {
      console.log("subscribing");
      socket.subscribe(topic, handleReceiveNotificationSocket, { id: topic });
    }
    return () => {
      if (socket) {
        console.log("unsubscribing");
        socket.unsubscribe(topic);
      }
    };
  }, [socket, userId, handleReceiveNotificationSocket]);

  useQuery(["notifications", filter], () => getNotifications(filter), {
    onSuccess: (data) => {
      setNotifications(data);
    },
    onError: (err) => {
      console.log("err re", err);
    },
  });
  return (
    <PageWithTitle
      onTabChange={(id) => {
        switch (id) {
          case NotificationStatus[0].id:
            setFilter(null);
            break;

          case NotificationStatus[1].id:
            setFilter(false);
            break;

          case NotificationStatus[2].id:
            setFilter(true);
            break;

          default:
            setFilter(null);
            break;
        }
      }}
      title={"Notifications"}
      tabItems={NotificationStatus}
    >
      {notifications?.length ? (
        <div>
          <NotificationList notificationList={notifications} />
        </div>
      ) : (
        <div className="text-center text-gray-500">
          you don't have any notifications right now
        </div>
      )}
    </PageWithTitle>
  );
};

export default NotificationsPage;

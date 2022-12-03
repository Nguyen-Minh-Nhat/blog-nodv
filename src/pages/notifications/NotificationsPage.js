import { useState } from "react";
import { useQuery } from "react-query";
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
      <div>
        <NotificationList notificationList={notifications} />
      </div>
    </PageWithTitle>
  );
};

export default NotificationsPage;

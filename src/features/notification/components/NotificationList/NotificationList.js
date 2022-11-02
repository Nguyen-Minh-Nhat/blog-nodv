import Notification from '../..';

const NotificationList = ({ notificationList }) => {
	return (
		<div className="flex flex-col gap-2">
			{notificationList.map((notification) => (
				<Notification key={notification.id} notification={notification} />
			))}
		</div>
	);
};

export default NotificationList;

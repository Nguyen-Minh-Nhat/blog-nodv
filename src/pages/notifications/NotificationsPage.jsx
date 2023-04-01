import {
	NotificationList,
	NotificationListLoading,
} from '../../features/notification/components';
import { useEffect, useState } from 'react';

import { MainContentLayout } from '../../layouts';
import Tab from '../../components/Tab';
import { getNotifications } from '../../api/notificationApi';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const NotificationStatus = [
	{ id: 0, title: 'All' },
	{ id: 1, title: 'Unread' },
	{ id: 2, title: 'Read' },
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

	useEffect(() => {
		const topic = `/topic/notifications/${userId}/new`;
		if (socket) {
			socket.subscribe(topic, handleReceiveNotificationSocket, {
				id: topic,
			});
		}
		return () => {
			if (socket) {
				console.log('unsubscribing');
				socket.unsubscribe(topic);
			}
		};
	}, [socket, userId, handleReceiveNotificationSocket]);

	const { isLoading } = useQuery(
		['notifications', filter],
		() => getNotifications(filter),
		{
			onSuccess: (data) => {
				setNotifications(data);
			},
			onError: (err) => {
				console.log('err re', err);
			},
		},
	);
	const handleTabChange = (id) => {
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
	};

	return (
		<MainContentLayout>
			<MainContentLayout.Header>
				<MainContentLayout.Title>Notifications</MainContentLayout.Title>
				<Tab tabItems={NotificationStatus} onChange={handleTabChange} />
			</MainContentLayout.Header>
			<MainContentLayout.Body>
				{!isLoading ? (
					<NotificationList notificationList={notifications} />
				) : (
					<NotificationListLoading />
				)}
			</MainContentLayout.Body>
		</MainContentLayout>
	);
};

export default NotificationsPage;

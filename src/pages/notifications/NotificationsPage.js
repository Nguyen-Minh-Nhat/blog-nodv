import { useSelector } from 'react-redux';
import PageWithTitle from '../../components/PageWithTitle';
import { NotificationList } from '../../features/notification';

export const TYPE_NOTIFICATION = {
	follow: 'follow',
	clap: 'clap',
	comment: 'comment',
};

const NotificationsPage = () => {
	const user = useSelector((state) => state.user.data.info);
	const notificationList = [
		{
			id: '1',
			link: `/user/${user.id}`,
			sender: user,
			receiver: user,
			type: TYPE_NOTIFICATION.follow,
			content: 'Nguyễn Minh Nhật đã follow bạn',
			createdAt: new Date(),
			status: 1,
		},
		{
			id: '2',
			link: `/user/${user.id}`,
			sender: user,
			receiver: user,
			type: TYPE_NOTIFICATION.comment,
			content: 'Nguyễn Minh Nhật đã follow bạn',
			createdAt: new Date(),
			status: 1,
		},
		{
			id: '3',
			link: `/user/${user.id}`,
			sender: user,
			receiver: user,
			type: TYPE_NOTIFICATION.clap,
			content: 'Nguyễn Minh Nhật đã follow bạn',
			createdAt: new Date(),
			status: 0,
		},
	];

	return (
		<PageWithTitle
			title={'Notifications'}
			tabItems={[
				{ id: 1, title: 'All' },
				{ id: 2, title: 'Unread' },
			]}
		>
			<div>
				<NotificationList notificationList={notificationList} />
			</div>
		</PageWithTitle>
	);
};

export default NotificationsPage;

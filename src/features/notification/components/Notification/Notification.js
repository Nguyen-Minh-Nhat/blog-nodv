import { Avatar } from '@mui/material';
import { formatRelative } from 'date-fns';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TYPE_NOTIFICATION } from '../../../../pages/notifications/NotificationsPage';

const Notification = ({ notification }) => {
	const type = useMemo(() => {
		let res = { message: '', icon: '' };
		switch (notification.type) {
			case TYPE_NOTIFICATION.follow:
				res.message = 'started following you';
				res.icon = <i className="fa-solid fa-user-plus"></i>;
				break;
			case TYPE_NOTIFICATION.clap:
				res.message = 'clapped for your post';
				res.icon = <i className="fa-solid fa-hands-clapping"></i>;
				break;
			case TYPE_NOTIFICATION.comment:
				res.message = 'comment on your post';
				res.icon = <i className="fa-solid fa-comment"></i>;
				break;

			default:
				res = 'notification';
				break;
		}
		return res;
	}, [notification.type]);
	return (
		<Link
			to={notification.link}
			className={`border-l-2 transition-all hover:bg-slate-100 ${
				notification.status === 0
					? 'border-transparent'
					: 'border-green-500 bg-slate-50'
			} p-5`}
		>
			<div className="flex items-center gap-4">
				<Avatar
					className="h-8 w-8"
					alt={notification.sender?.username}
					src={notification.sender?.avatar}
				/>

				<div className="flex flex-col">
					<span className="text-base">
						{notification.sender?.username}{' '}
						<span className="text-slate-500"> {type.message}</span>
					</span>
					<div className="flex items-center gap-2 text-sm text-slate-500">
						<span className="capitalize text-slate-500">
							{formatRelative(notification.createdAt, new Date())}
						</span>
						{type.icon}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Notification;

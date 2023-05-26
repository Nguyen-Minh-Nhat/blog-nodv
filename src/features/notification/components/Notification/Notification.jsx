import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { NotificationType } from '../../../../config/dataType';
import { formatRelative } from 'date-fns';
import { useMemo } from 'react';

export const Notification = ({ notification, setNotificationReadMutation }) => {
	const type = useMemo(() => {
		let res = { message: '', icon: '' };
		switch (notification.type) {
			case NotificationType.FOLLOW:
				res.message = 'started following you';
				res.icon = <i className="fa-solid fa-user-plus"></i>;
				break;
			case NotificationType.LIKE:
				res.message = 'clapped for your post';
				res.icon = <i className="fa-solid fa-hands-clapping"></i>;
				break;
			case NotificationType.POST:
				res.message = 'posted a new story';
				res.icon = <i className="fa-solid fa-file"></i>;
				break;
			case NotificationType.COMMENT:
				res.message = 'comment on your post';
				res.icon = <i className="fa-solid fa-comment"></i>;
				break;
			case NotificationType.REPLYCOMMENT:
				res.message = 'replied to your comment on a post';
				res.icon = <i className="fa-solid fa-comment"></i>;
				break;
			case NotificationType.LIKECOMMENT:
				res.message = 'clapped for your comment';
				res.icon = <i className="fa-solid fa-hands-clapping"></i>;
				break;
			case NotificationType.WARNINGCOMMENT:
				res.message = 'your comment violates our community standards';
				res.icon = <i class="fa-light fa-triangle-exclamation"></i>;
				break;
			case NotificationType.WARNINGPOST:
				res.message = 'your post violates our community standards';
				res.icon = <i class="fa-light fa-triangle-exclamation"></i>;
				break;
			case NotificationType.BLOCK_POST:
				res.message = 'your post has been blocked';
				res.icon = <i class="fa-light fa-triangle-exclamation"></i>;
				break;

			default:
				res = 'notification';
				break;
		}
		return res;
	}, [notification.type]);
	return (
		<Link
			onClick={() =>
				!notification.isRead ? setNotificationReadMutation() : ''
			}
			to={notification.link}
			className={`border-l-2 transition-all hover:bg-slate-100 ${
				!notification.isRead
					? 'border-green-500 bg-slate-50'
					: 'border-transparent'
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
						{notification.sender?.username}
						<span className="text-slate-500"> {type.message}</span>
					</span>
					<div className="flex items-center gap-2 text-sm text-slate-500">
						<span className="capitalize text-slate-500">
							{formatRelative(
								new Date(notification.createdDate),
								new Date(),
							)}
						</span>
						{type.icon}
					</div>
				</div>
			</div>
		</Link>
	);
};

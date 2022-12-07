import { useMutation } from 'react-query';
import { createNotification } from '../../api/notificationApi';
import {
	followUser,
	unFollowUser,
	updateCountNotifications,
} from '../../api/userApi';
import { NotificationType } from '../../config/dataType';
import { callApiCreateNotification } from '../../utils/generationNotification';
import ButtonFollow from './ButtonFollow';
const UserFollowButton = ({ id, userId, onUpdate, ...props }) => {
	const createNotificationMutation = useMutation(createNotification);

	const followUserMutation = useMutation(followUser, {
		onSuccess: (data) => {
			onUpdate(data);
		},
	});

	const unFollowUserMutation = useMutation(unFollowUser, {
		onSuccess: (data) => {
			onUpdate(data);
		},
	});
	const updateUserIncreaseNumOfNotification = useMutation(
		updateCountNotifications
	);

	const handleFollow = (data, isFollow) => {
		if (isFollow) {
			followUserMutation.mutate(data);
			callApiCreateNotification(
				data,
				NotificationType.FOLLOW,
				createNotificationMutation,
				userId
			);
			const Increase = {
				isIncrease: true,
				userId: data,
			};
			updateUserIncreaseNumOfNotification.mutate(Increase);
		} else {
			unFollowUserMutation.mutate(data);
		}
	};

	return (
		<ButtonFollow
			onClick={(state) => {
				handleFollow(id, state);
			}}
			{...props}
		/>
	);
};

export default UserFollowButton;

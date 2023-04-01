import { Children, cloneElement, useState } from 'react';
import {
	followUser,
	unFollowUser,
	updateCountNotifications,
} from '../../../api/userApi';
import { useDispatch, useSelector } from 'react-redux';

import { FollowButton } from '../../../components';
import { NotificationType } from '../../../config/dataType';
import { callApiCreateNotification } from '../../../utils/generationNotification';
import { createNotification } from '../../../api/notificationApi';
import { updateUserInfo } from '../../../redux/slices/userSlice';
import { useMutation } from 'react-query';

export const FollowUser = ({ followId, children }) => {
	const dispatch = useDispatch();
	const followIds = useSelector(
		(state) => state?.user?.data?.info?.followingId || [],
	);
	const [isFollowing, setIsFollowing] = useState(
		followIds.includes(followId),
	);

	const handleFollowUser = () => {
		setIsFollowing((isFollowing) => !isFollowing);
		if (isFollowing) {
			unFollowUserMutation.mutate(followId);
		} else {
			followUserMutation.mutate(followId);
		}
	};

	const createNotificationMutation = useMutation(createNotification, {
		onSuccess: (data) => {
			const Increase = {
				isIncrease: true,
				userId: data.receiverId,
			};
			updateUserIncreaseNumOfNotification.mutate(Increase);
		},
	});

	const followUserMutation = useMutation(followUser, {
		onSuccess: (data) => {
			dispatch(
				updateUserInfo({
					followingId: [...followIds, followId],
				}),
			);
			callApiCreateNotification(
				data,
				NotificationType.FOLLOW,
				createNotificationMutation,
				followId,
			);
		},
	});

	const unFollowUserMutation = useMutation(unFollowUser, {
		onSuccess: (data) => {
			dispatch(
				updateUserInfo({
					followingId: followIds.filter((id) => id !== followId),
				}),
			);
		},
	});
	const updateUserIncreaseNumOfNotification = useMutation(
		updateCountNotifications,
	);

	return children && typeof children === 'function'
		? children({ handleFollowUser, isFollowing })
		: Children.map(children, (child) =>
				cloneElement(child, {
					onClick: handleFollowUser,
					isFollowing,
				}),
		  );
};

const FollowUserButton = ({ onClick, isFollowing, ...props }) => {
	return (
		<FollowButton isFollowed={isFollowing} onClick={onClick} {...props} />
	);
};

FollowUser.Button = FollowUserButton;

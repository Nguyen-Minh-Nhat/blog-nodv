import { Avatar } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createNotification } from '../../api/notificationApi';
import {
	followUser,
	getAllUnFollow,
	unFollowUser,
	updateCountNotifications,
} from '../../api/userApi';
import { NotificationType } from '../../config/dataType';
import { callApiCreateNotification } from '../../utils/generationNotification';
import ButtonFollow from '../ButtonFollow/ButtonFollow';

const WhoToFollow = () => {
	const userId = useSelector((state) => state.user?.data?.info?.id);
	const queryClient = useQueryClient();
	const { data: users, isSuccess } = useQuery('follows', () =>
		getAllUnFollow()
	);

	const updateUsers = (updatedFollower) => {
		queryClient.setQueryData('follows', (oldData) =>
			oldData.map((follow) => {
				if (follow.id === updatedFollower.id) {
					return updatedFollower;
				}
				return follow;
			})
		);
	};

	const createNotificationMutation = useMutation(createNotification);

	const followUserMutation = useMutation(followUser, {
		onSuccess: (data) => {
			updateUsers(data);
		},
	});

	const unFollowUserMutation = useMutation(unFollowUser, {
		onSuccess: (data) => {
			updateUsers(data);
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
		<>
			<div className="mt-10">
				<h2 className="m-0 block text-base font-medium leading-5">
					Who To Follow
				</h2>

				{isSuccess &&
					users.map((item) => (
						<User user={item} key={item.id}>
							<ButtonFollow
								isFollowed={item?.followerId?.includes(userId)}
								onClick={(state) => {
									handleFollow(item.id, state);
								}}
							/>
						</User>
					))}
			</div>
			<span className="absolute mt-5 cursor-pointer">See all</span>
		</>
	);
};

export default WhoToFollow;

const User = ({ user, children }) => {
	const profileUrl = `/profile/${user.email}`;
	return (
		<div
			className="relative flex w-full items-center justify-between pt-4"
			key={user.id}
		>
			<div className="flex items-center">
				<Link to={profileUrl}>
					<Avatar
						src={user?.avatar}
						className="h-12 w-12"
						alt={user.username}
					/>
				</Link>
				<Link to={profileUrl}>
					<div className="ml-4 mr-2 block">
						<h2 className="break-all text-base font-bold">{user.username}</h2>
						<div className="mt-1 block  break-words">
							<p className=" color break-all text-sm font-normal line-clamp-2">
								{user?.bio}
							</p>
						</div>
					</div>
				</Link>
			</div>
			<div>{children}</div>
		</div>
	);
};

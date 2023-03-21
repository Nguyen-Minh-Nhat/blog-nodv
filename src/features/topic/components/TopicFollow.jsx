import { Children, cloneElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FollowButton } from '../../../components';
import { followTopic } from '../../../api/userApi';
import { updateUserInfo } from '../../../redux/slices/userSlice';
import { useMutation } from 'react-query';

export const TopicFollow = ({ topicId, children }) => {
	const dispatch = useDispatch();
	const followingIds = useSelector(
		(state) => state?.user?.data?.info?.topics || [],
	);
	const [isFollowing, setIsFollowing] = useState(
		followingIds.includes(topicId),
	);

	const { mutate } = useMutation(followTopic, {
		onSuccess: () => {
			let newFollowingIds = [...followingIds];
			if (isFollowing) {
				newFollowingIds = newFollowingIds.filter(
					(id) => id !== topicId,
				);
			} else {
				newFollowingIds.push(topicId);
			}
			dispatch(updateUserInfo({ topics: newFollowingIds }));
		},
	});

	const handleFollowTopic = () => {
		setIsFollowing((isFollowing) => !isFollowing);
		mutate(topicId);
	};

	return children && typeof children === 'function'
		? children({ handleFollowTopic, isFollowing })
		: Children.map(children, (child) =>
				cloneElement(child, {
					onClick: handleFollowTopic,
					isFollowing,
				}),
		  );
};

const TopicFollowButton = ({ onClick, isFollowing, ...props }) => {
	return (
		<FollowButton isFollowed={isFollowing} onClick={onClick} {...props} />
	);
};

TopicFollow.Button = TopicFollowButton;

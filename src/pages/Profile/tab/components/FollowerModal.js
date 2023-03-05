import { useQuery, useQueryClient } from 'react-query';

import React from 'react';
import UserList from '../../../../components/UserList';
import { getAllUsersFollower } from '../../../../api/userApi';
import { useSelector } from 'react-redux';

const FollowerModal = () => {
	const userId = useSelector((state) => state.profile?.data?.id);
	const queryClient = useQueryClient();
	const usersFollower = queryClient.getQueryData('usersFollower');
	useQuery('usersFollower', () => getAllUsersFollower(userId));

	return (
		<div className="flex justify-center">
			<div className="] flex max-h-[70vh] min-h-[384px] w-[480px] flex-col rounded-xl bg-white pt-8">
				<h2 className="m-0 block pb-5 text-center text-2xl font-bold leading-5">
					Follower
				</h2>
				<div
					className="mx-auto w-full flex-1 px-4"
					style={{ overflowY: 'overlay' }}
				>
					{usersFollower && <UserList users={usersFollower} />}
				</div>
			</div>
		</div>
	);
};

export default FollowerModal;

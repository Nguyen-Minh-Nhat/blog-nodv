import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { getAllUsersFollower } from '../../../../api/userApi';
import UserList from '../../../../components/UserList';

const FollowerModal = () => {
	const userId = useSelector((state) => state.profile?.data?.id);
	const queryClient = useQueryClient();
	const usersFollower = queryClient.getQueryData('usersFollower');
	useQuery('usersFollower', () => getAllUsersFollower(userId));

	return (
		<div className="flex justify-center">
			<div className="mx-4 w-[650px] basis-[700px] p-6">
				<div className="bg-white p-6">
					<h2 className="m-0 mb-4 block text-base font-semibold leading-5">
						Followers
					</h2>

					{usersFollower && <UserList users={usersFollower} />}
				</div>
			</div>
		</div>
	);
};

export default FollowerModal;

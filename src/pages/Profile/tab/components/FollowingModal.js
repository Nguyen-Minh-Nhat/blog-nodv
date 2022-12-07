import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { getAllUsersFollowing } from '../../../../api/userApi';
import UserList from '../../../../components/UserList';

const FollowingModal = () => {
	const userId = useSelector((state) => state.profile?.data?.id);
	const queryClient = useQueryClient();
	const usersFollowing = queryClient.getQueryData('usersFollowing');
	useQuery('usersFollowing', () => getAllUsersFollowing(userId));

	return (
		<div className="flex justify-center">
			<div className="mx-4 w-[650px] basis-[700px] p-6">
				<div className="bg-white p-6">
					<h2 className="m-0 mb-4 block text-base font-semibold leading-5">
						Following
					</h2>
					{usersFollowing && <UserList users={usersFollowing} />}
				</div>
			</div>
		</div>
	);
};

export default FollowingModal;

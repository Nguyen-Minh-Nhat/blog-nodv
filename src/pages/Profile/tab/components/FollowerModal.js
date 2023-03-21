import React, { useMemo } from 'react';

import { Button } from '@mui/material';
import UserList from '../../../../components/UserList';
import { getFollowers } from '../../../../api/userApi';
import { useInfiniteQuery } from 'react-query';
import { useSelector } from 'react-redux';

const FollowerModal = () => {
	const userId = useSelector((state) => state.profile?.data?.id);

	const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
		useInfiniteQuery(
			['followers-modal', userId],
			({ pageParam }) =>
				getFollowers(userId, { page: pageParam, limit: 10 }),
			{
				getNextPageParam: (lastPage) => {
					const { last, number } = lastPage;
					return last ? undefined : number + 1;
				},
				enabled: !!userId,
			},
		);
	const users = useMemo(() => {
		const allUsers = [];
		data?.pages?.forEach((page) => {
			return page.content.forEach((user) =>
				allUsers.push({ ...user, page: page.number }),
			);
		});
		return allUsers;
	}, [data]);
	return (
		<div className="flex justify-center">
			<div className="flex max-h-[70vh] min-h-[384px] w-[480px] flex-col overflow-hidden rounded-xl bg-white">
				<h2 className="m-0 flex h-14 items-center justify-center border-b text-2xl font-bold">
					Follower
				</h2>
				<div
					className="mx-auto w-full flex-1 p-2 px-4"
					style={{ overflowY: 'overlay' }}
				>
					<UserList users={users} loading={isLoading} />
					{hasNextPage && (
						<div className="my-3 mt-4 flex justify-center">
							<Button
								className="btn btn-primary"
								color="inherit"
								disableElevation
								variant="outlined"
								size="small"
								onClick={() => fetchNextPage()}
							>
								{isFetching ? 'Loading...' : 'Load More'}
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FollowerModal;

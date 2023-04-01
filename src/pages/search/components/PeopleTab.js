import { Link, useSearchParams } from 'react-router-dom';

import { Avatar } from '@mui/material';
import ButtonFollow from '../../../components/ButtonFollow/ButtonFollow';
import { FollowUser } from '../../../features/user/components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { searchUser } from '../../../api/userApi';
import { useInfiniteQuery } from 'react-query';
import { useMemo } from 'react';

const PeopleTab = () => {
	const [searchParams] = useSearchParams();
	const storeKey = ['users', searchParams.get('query')];

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isLoading,
		isSuccess,
		isFetching,
	} = useInfiniteQuery(
		storeKey,
		({ pageParam }) => searchUser(searchParams.get('query'), pageParam, 5),
		{
			getNextPageParam: (lastPage) => {
				const { last, number } = lastPage;
				return last ? undefined : number + 1;
			},
		},
	);
	const users = useMemo(() => {
		const allUsers = [];
		data?.pages.forEach((page) => {
			return page.content.forEach((post) =>
				allUsers.push({ ...post, page: page.number }),
			);
		});
		return allUsers;
	}, [data]);

	return (
		<>
			<InfiniteScroll
				dataLength={users.length}
				next={fetchNextPage}
				hasMore={hasNextPage}
			>
				{isSuccess &&
					users.map((user) => (
						<UserQuickView user={user} key={user.id} />
					))}
			</InfiniteScroll>
			{isLoading && (
				<div>
					<UserLoading />
					<UserLoading />
					<UserLoading />
				</div>
			)}
		</>
	);
};

const UserQuickView = ({ user }) => {
	const link = `/profile/${user.email}`;
	return (
		<div className="flex items-center border-b py-9 first:pt-0">
			<Link to={link}>
				<Avatar
					src={user.avatar}
					alt={user.username}
					className="mr-7 h-12 w-12"
				/>
			</Link>
			<Link to={link} className="flex flex-col">
				<div className="">{user.username}</div>
				<div className="text-sm text-gray-500">{user.bio}</div>
			</Link>
			<div className="flex-end ml-auto">
				<FollowUser followId={user.id}>
					<FollowUser.Button
						bgColorBefore="bg-green-700"
						textColorBefore="text-white"
						bgColorAfter="bg-white"
						textColorAfter="text-green-700"
					/>
				</FollowUser>
			</div>
		</div>
	);
};

const UserLoading = () => {
	return (
		<div className="flex items-center border-b py-4">
			<div className="mx-7 h-16 w-16 animate-pulse rounded-full bg-gray-300"></div>
			<div className="flex flex-col">
				<div className="h-4 w-32 animate-pulse rounded-full bg-gray-300"></div>
				<div className="mt-2 h-3 w-24 animate-pulse rounded-full bg-gray-300"></div>
			</div>
			<div className="flex-end ml-auto">
				<div className="h-8 w-24 animate-pulse rounded-full bg-gray-300"></div>
			</div>
		</div>
	);
};

export default PeopleTab;

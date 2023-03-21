import { Avatar } from '@mui/material';
import { FollowUser } from '../../features/user/components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserList = ({ users, loading }) => {
	const userLogin = useSelector((state) => state.user?.data?.info);
	return (
		<div className="flex flex-col gap-4">
			{userLogin &&
				users.map((user) => (
					<UserItem user={user} key={user.id}>
						<FollowUser followId={user.id}>
							<FollowUser.Button />
						</FollowUser>
					</UserItem>
				))}
			{loading && (
				<>
					<UserItemLoading />
					<UserItemLoading />
					<UserItemLoading />
				</>
			)}
		</div>
	);
};

export default UserList;

const UserItem = ({ user, children }) => {
	const profileUrl = `/profile/${user?.email}`;
	return (
		<div
			className="relative flex w-full items-center justify-between"
			key={user.id}
		>
			<div className="flex items-center">
				<Link to={profileUrl}>
					<Avatar
						src={user?.avatar}
						className="h-10 w-10"
						alt={user.username}
					/>
				</Link>
				<Link to={profileUrl}>
					<div className="ml-4 mr-2 block">
						<h2 className="text-base font-bold">{user.username}</h2>
						<div className="mt-1 block break-words">
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

const UserItemLoading = () => {
	return (
		<div className="relative flex w-full items-center justify-between">
			<div className="flex items-center">
				<div className="h-10 w-10 animate-pulse rounded-full bg-gray-300"></div>
				<div className="ml-4 mr-2 block">
					<div className="h-4 w-20 animate-pulse rounded-full bg-gray-300"></div>
					<div className="mt-1 block break-words">
						<div className="h-4 w-40 animate-pulse rounded-full bg-gray-300"></div>
					</div>
				</div>
			</div>
			<div className="h-8 w-20 animate-pulse rounded-full bg-gray-300"></div>
		</div>
	);
};

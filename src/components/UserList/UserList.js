import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserFollowButton from '../ButtonFollow/UserFollowButton';

const UserList = ({ users }) => {
	const userLogin = useSelector((state) => state.user?.data?.info);
	return (
		<div className="flex flex-col gap-4">
			{userLogin &&
				users.map((user) => (
					<User user={user} key={user.id}>
						<UserFollowButton
							id={user.id}
							userEmail={userLogin.email}
							isFollowed={user?.followerId?.includes(
								userLogin.id
							)}
						/>
					</User>
				))}
		</div>
	);
};

export default UserList;

const User = ({ user, children }) => {
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
						className="h-12 w-12"
						alt={user.username}
					/>
				</Link>
				<Link to={profileUrl}>
					<div className="ml-4 mr-2 block">
						<h2 className="break-all text-base font-bold">
							{user.username}
						</h2>
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

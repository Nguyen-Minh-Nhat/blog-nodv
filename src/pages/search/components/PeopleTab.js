import { Avatar } from '@mui/material';
import ButtonFollow from '../../../components/ButtonFollow/ButtonFollow';
import { searchUser } from '../../../api/userApi';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

const PeopleTab = () => {
	const [searchParams] = useSearchParams();
	const storeKey = ['users', searchParams.get('query')];

	const {
		data: users,
		isSuccess,
		isLoading,
	} = useQuery(storeKey, () => searchUser(searchParams.get('query')));

	return (
		<>
			<>
				{isSuccess &&
					users.map((user) => <UserQuickView user={user} />)}
			</>
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
	return (
		<div className="flex items-center border-b py-4">
			<Avatar
				src={user.avatar}
				alt={user.username}
				className="mx-7 h-16 w-16"
			/>
			<div className="flex flex-col">
				<div className="">{user.username}</div>
				<div className="text-sm text-gray-500">{user.bio}</div>
			</div>
			<div className="flex-end ml-auto">
				<ButtonFollow />
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

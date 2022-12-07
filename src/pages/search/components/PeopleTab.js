import { Avatar } from '@mui/material';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { searchUser } from '../../../api/userApi';
import ButtonFollow from '../../../components/ButtonFollow/ButtonFollow';

const PeopleTab = () => {
	const [searchParams] = useSearchParams();
	const storeKey = ['users', searchParams.get('query')];

	const { data: users, isSuccess } = useQuery(storeKey, () =>
		searchUser(searchParams.get('query'))
	);

	return <>{isSuccess && users.map((user) => <UserQuickView user={user} />)}</>;
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

export default PeopleTab;

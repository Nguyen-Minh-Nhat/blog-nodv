import { useQuery } from 'react-query';
import { getAllUsersFollowing } from '../../api/userApi';
import PanelWrapper from '../PanelWrapper';
import UserList from './UserList';

const FollowingList = () => {
	const { data: users, isSuccess } = useQuery(
		'following',
		getAllUsersFollowing
	);
	return (
		<PanelWrapper title="Following">
			{isSuccess && <UserList users={users} />}
		</PanelWrapper>
	);
};

export default FollowingList;

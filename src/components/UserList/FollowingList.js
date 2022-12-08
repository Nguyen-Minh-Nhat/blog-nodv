import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getAllUsersFollowing } from '../../api/userApi';
import PanelWrapper from '../PanelWrapper';
import UserList from './UserList';

const FollowingList = () => {
	const user = useSelector((state) => state?.profile?.data);
	const { data: users, isSuccess } = useQuery(
		['following', user?.id],
		() => getAllUsersFollowing(user?.id),
		{
			enabled: !!user,
		}
	);
	return (
		<PanelWrapper title="Following">
			{isSuccess && <UserList users={users} />}
		</PanelWrapper>
	);
};

export default FollowingList;

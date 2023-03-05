import PanelWrapper from '../PanelWrapper';
import UserList from './UserList';
import { getAllUsersFollowing } from '../../api/userApi';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const FollowingList = () => {
	const user = useSelector((state) => state?.profile?.data);
	const { data: users, isSuccess } = useQuery(
		['following', user?.id],
		() => getAllUsersFollowing(user?.id),
		{
			enabled: !!user,
		},
	);
	return (
		<PanelWrapper title="Following">
			{isSuccess && <UserList users={users} />}
		</PanelWrapper>
	);
};

export default FollowingList;

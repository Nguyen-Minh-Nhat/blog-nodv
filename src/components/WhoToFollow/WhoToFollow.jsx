import { useQuery } from 'react-query';
import { getAllUnFollow, getUsersNotFollow } from '../../api/userApi';
import PanelWrapper from '../PanelWrapper';
import UserList from '../UserList';

const WhoToFollow = () => {
	const { data: users, isSuccess } = useQuery('follows', () =>
	getUsersNotFollow(3)
	);

	return (
		<>
			<PanelWrapper title={'Who to follow'}>
				{isSuccess && <UserList users={users} />}
			</PanelWrapper>
			<span className="absolute mt-5 cursor-pointer">See all</span>
		</>
	);
};

export default WhoToFollow;

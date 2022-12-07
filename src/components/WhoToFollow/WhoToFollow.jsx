import { useQuery } from 'react-query';
import { getAllUnFollow } from '../../api/userApi';
import PanelWrapper from '../PanelWrapper';
import UserList from '../UserList';

const WhoToFollow = () => {
	const { data: users, isSuccess } = useQuery('follows', () =>
		getAllUnFollow()
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

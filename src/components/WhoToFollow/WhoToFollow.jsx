import { useQuery } from 'react-query';
import { getAllUnFollow, getUsersNotFollow } from '../../api/userApi';
import ModalTrigger from '../ModalTrigger';
import PanelWrapper from '../PanelWrapper';
import UserList from '../UserList';
import ShowMore from './ShowMore';

const WhoToFollow = () => {
	const { data: users, isSuccess } = useQuery('follows', () =>
		getUsersNotFollow(3)
	);

	return (
		<>
			<PanelWrapper title={'Who to follow'}>
				{isSuccess && <UserList users={users} />}
			</PanelWrapper>
			<ModalTrigger
				button={<span className="absolute mt-5 cursor-pointer">Show more</span>}
			>
				{<ShowMore />}
			</ModalTrigger>
		</>
	);
};

export default WhoToFollow;

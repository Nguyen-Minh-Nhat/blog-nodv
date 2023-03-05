import ModalTrigger from '../ModalTrigger';
import PanelWrapper from '../PanelWrapper';
import ShowMore from './ShowMore';
import UserList from '../UserList';
import { getUsersNotFollow } from '../../api/userApi';
import { useQuery } from 'react-query';

const WhoToFollow = () => {
	const { data: users, isSuccess } = useQuery('follows', () =>
		getUsersNotFollow(3),
	);
	return (
		isSuccess && (
			<>
				<PanelWrapper title={'Who to follow'}>
					<UserList users={users} />
				</PanelWrapper>
				<ModalTrigger
					button={
						<span className="absolute mt-5 cursor-pointer">
							Show more
						</span>
					}
				>
					{<ShowMore />}
				</ModalTrigger>
			</>
		)
	);
};

export default WhoToFollow;

import FollowingModal from '../../pages/Profile/tab/components/FollowingModal';
import ModalTrigger from '../ModalTrigger';
import PanelWrapper from '../PanelWrapper';
import UserList from './UserList';
import { getFollowing } from '../../api/userApi';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const FollowingList = () => {
	const user = useSelector((state) => state?.profile?.data);
	const { data, isSuccess } = useQuery(
		['following', user?.id],
		() => getFollowing(user?.id, {}),
		{
			enabled: !!user,
		},
	);
	const users = useMemo(() => {
		return data?.content || [];
	}, [data]);
	return (
		isSuccess && (
			<PanelWrapper title="Following">
				<UserList users={users} />
				{data.totalElements - data.size > 0 && (
					<div className="my-3 flex text-sm">
						<ModalTrigger
							button={
								<button className="btn btn-primary">
									Show all ({data.totalElements})
								</button>
							}
						>
							<FollowingModal />
						</ModalTrigger>
					</div>
				)}
			</PanelWrapper>
		)
	);
};

export default FollowingList;

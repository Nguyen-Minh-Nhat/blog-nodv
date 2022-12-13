import { useQuery } from 'react-query';
import { getUsersNotFollow } from '../../api/userApi';
import UserList from '../UserList';

const ShowMore = () => {
	const { data: users, isSuccess } = useQuery('usersFL', () =>
		getUsersNotFollow(20)
	);
	return (
		<>
			<div className="h-[90vh] w-[41vw] overflow-y-scroll bg-white px-[16%] pt-20 opacity-90">
				<h2 className="m-0 block pb-5 text-center text-2xl font-bold leading-5">
					Who To Follow
				</h2>
				{isSuccess && <UserList users={users} />}
			</div>
		</>
	);
};

export default ShowMore;

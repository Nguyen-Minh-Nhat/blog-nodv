import UserList from '../UserList';
import { getUsersNotFollow } from '../../api/userApi';
import { useQuery } from 'react-query';

const ShowMore = () => {
	const { data: users, isSuccess } = useQuery('usersFL', () =>
		getUsersNotFollow(20),
	);
	return (
		<div className="flex justify-center">
			<div className="flex max-h-[70vh] min-h-[384px] w-[480px] flex-col overflow-hidden rounded-xl bg-white pt-8">
				<h2 className="m-0 block pb-5 text-center text-2xl font-bold leading-5">
					Who To Follow
				</h2>
				<div
					className="mx-auto w-full flex-1 px-4 pb-8"
					style={{ overflowY: 'overlay' }}
				>
					{isSuccess && <UserList users={users} />}
				</div>
			</div>
		</div>
	);
};

export default ShowMore;

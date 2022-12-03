import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { followUser, searchUser } from '../../api/userApi';
import ButtonFollow from '../ButtonFollow/ButtonFollow';

const WhoToFollow = () => {
	const { data: users } = useQuery('users', () => searchUser('nhật'));
	const followMutation = useMutation(followUser);
	const handleFollow = (id) => {
		console.log(id);
		followMutation.mutate(id);
	};

	return (
		<>
			<div>
				<h2 className="m-0 mb-5 block px-4 text-base font-medium leading-5">
					Who To Follow
				</h2>
				<div className="flex flex-col gap-4">
					{users &&
						users.map((item) => (
							<div
								className="relative flex w-full items-center justify-between pt-4"
								key={item.id}
							>
								<div className="container-left">
									{/* <Link to={item?.path}> */}
									<img
										src={item.avatar}
										alt="TanDat"
										className="t-0 absolute block h-12 w-12 rounded-full"
									/>
									{/* </Link> */}
									{/* <Link to={item?.path}> */}
									<div className="ml-16 mr-8 block">
										<h2 className="break-all text-base font-bold">
											{item.username}
										</h2>
										<div className="mt-1 block  break-words">
											<p className=" color break-all text-sm font-normal line-clamp-2">
												{item?.bio}
											</p>
										</div>
									</div>
									{/* </Link> */}
								</div>
								<div>
									<ButtonFollow
										isFollowed={item?.followed}
										onClick={() => handleFollow(item.id)}
									/>
								</div>
							</div>
						))}
				</div>
			</div>
			<span className="cursor-pointer">See all</span>
		</>
	);
};

export default WhoToFollow;

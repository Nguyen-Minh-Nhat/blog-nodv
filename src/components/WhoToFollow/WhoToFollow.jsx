import { Chip, ListItemSecondaryAction } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonFollow from '../ButtonFollow/ButtonFollow';

const lstFollower = [
	{
		id: 1,
		name: 'KimOanh',
		content:
			'Troi Ma oi Sao Kim Oanh Xinh qua du tr Troi Ma oi Sao Xinh Qua Di Ne Ma Oi Troi Ma oi Sao Kim Oanh Xinh Qua Di Ne Ma Oi aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		followed: true,
		avatar: 'https://i1.sndcdn.com/avatars-000299868797-urkzpd-t500x500.jpg',
		path: '/picture',
	},
	{
		id: 2,
		name: 'KimOanh',
		content:
			'Troi Ma oi Sao Kim Oanh Xinh qua du tr Troi Ma oi Sao Xinh Qua Di Ne Ma Oi Troi Ma oi Sao Kim Oanh Xinh Qua Di Ne Ma Oi aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		followed: false,
		avatar: 'https://i1.sndcdn.com/avatars-000299868797-urkzpd-t500x500.jpg',
		path: '/picture',
	},
	{
		id: 3,
		name: 'KimOanh',
		content:
			'Troi Ma oi Sao Kim Oanh Xinh qua du tr Troi Ma oi Sao Xinh Qua Di Ne Ma Oi Troi Ma oi Sao Kim Oanh Xinh Qua Di Ne Ma Oi aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		followed: false,
		avatar: 'https://i1.sndcdn.com/avatars-000299868797-urkzpd-t500x500.jpg',
		path: '/picture',
	},
];

const WhoToFollow = () => {
	return (
		<>
			<div>
				<h2 className="m-0 mb-5 block px-4 text-base font-medium leading-5">
					Who To Follow
				</h2>
				{lstFollower.map((item) => (
					<div
						className="relative flex w-full items-center justify-between pt-4"
						key={item.id}
					>
						<div className="container-left">
							<Link to={item.path}>
								<img
									src={item.avatar}
									alt="TanDat"
									className="t-0 absolute block h-12 w-12 rounded-full"
								/>
							</Link>
							<Link to={item.path}>
								<div className="ml-16 mr-8 block">
									<h2 className="break-all text-base font-bold">{item.name}</h2>
									<div className="mt-1 block  break-words">
										<p className=" color break-all text-sm font-normal line-clamp-2">
											{item.content}
										</p>
									</div>
								</div>
							</Link>
						</div>
						<div>
							<ButtonFollow isFollowed={item.followed} />
						</div>
					</div>
				))}
			</div>
			<span className="cursor-pointer">See all</span>
		</>
	);
};

export default WhoToFollow;

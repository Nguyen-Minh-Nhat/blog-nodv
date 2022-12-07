import MarkEmailReadSharpIcon from '@mui/icons-material/MarkEmailReadSharp';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ButtonFollow from '../ButtonFollow/ButtonFollow';
const InformationUser = () => {
	const user = useSelector((state) => state.profile?.data);
	const profileUrl = `/profile/${user?.email}`;

	return (
		<div className="mt-10 block ">
			{user && (
				<>
					<Link to={profileUrl}>
						<Avatar src={user.avatar} className="h-20 w-20" />
					</Link>
					<div className="mt-4 block"></div>
					<Link to={profileUrl} className="mt-2">
						<h2 className="leading-4">
							<span>{user.username}</span>
						</h2>
					</Link>

					<div className="mt-1.5 block text-sm"></div>

					<span>{user?.followerId?.length || 0} Followers</span>

					<div className=" mt-2  block"></div>

					<p className=" color leading-2 text-sm text-stone-700 ">{user.bio}</p>

					<div className=" mt-4  block"></div>

					<div className="mb-10 flex ">
						<ButtonFollow
							isFollowed={false}
							textColorBefore={'text-white'}
							bgColorBefore={'bg-green-500'}
							textColorAfter={'text-green-500'}
							bgColorAfter={'rgb'}
							onClick={(state) => {}}
						/>
						<button className="ml-2 block">
							<MarkEmailReadSharpIcon className="color h-9 w-9 rounded-full bg-green-500 fill-white p-1.5" />
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default InformationUser;

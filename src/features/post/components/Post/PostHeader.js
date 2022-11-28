import { Avatar, Tooltip } from '@mui/material';
import { format } from 'date-fns';
import { useMemo } from 'react';
import PostAction from '../PostAction';

const PostHeader = ({ post }) => {
	const socialMedia = useMemo(() => {
		return [
			{
				title: 'Twitter',
				icon: <i className="fa-brands fa-twitter"></i>,
			},
			{
				title: 'Facebook',
				icon: <i className="fa-brands fa-facebook"></i>,
			},
			{
				title: 'Linkedin',
				icon: <i className="fa-brands fa-linkedin"></i>,
			},
		];
	}, []);
	return (
		<div className="flex items-center justify-between pt-14">
			<div className="flex">
				<div className="mr-4 rounded-full shadow-[0_0_0_1px_#f1f5f9]">
					<Avatar
						className="h-12 w-12"
						src={post.user.avatar}
						alt={post.user.username}
					/>
				</div>
				<div className="flex flex-col justify-between">
					<span>{post.user.username}</span>
					<div className="flex gap-2 text-sm text-slate-700">
						<span className="text-slate-600">
							{format(new Date(post.createdDate), 'MMM d')}
						</span>
						.<span>{post.timeRead} min read</span> .
						<div className="cursor-pointer hover:text-[#98d0c0]">
							<i className="fa-solid fa-circle-play"></i> Listen
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center gap-8 text-lg">
				<div className="1 flex gap-4 text-lg">
					{socialMedia.map((item) => (
						<div
							key={item.title}
							className="cursor-pointer text-slate-400 hover:text-black"
						>
							<Tooltip title={item.title}>{item.icon}</Tooltip>
						</div>
					))}
					<div className="cursor-pointer text-slate-400 hover:text-black">
						<Tooltip title={'Copy link'}>
							<i className="fa-solid fa-link"></i>
						</Tooltip>
					</div>
				</div>
				<PostAction post={post} />
			</div>
		</div>
	);
};

export default PostHeader;

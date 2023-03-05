import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../../../routes/AppRoutes';
import { intlFormatDistance } from 'date-fns';
import { useMemo } from 'react';

const PostPreviewHeader = ({ post }) => {
	const timeDisplay = useMemo(() => {
		return intlFormatDistance(new Date(post.createdDate), new Date());
	}, [post.createdDate]);

	return (
		<div className="flex items-center gap-2 font-thin">
			<div className="flex items-center gap-2">
				<Link to={`${appRoutes.PROFILE}/${post.user.email}`}>
					<Avatar
						className="h-6 w-6"
						src={post.user?.avatar}
						alt={post.user?.username}
					/>
				</Link>
				<Link to={`${appRoutes.PROFILE}/${post.user.email}`}>
					<span className="text-sm font-normal">
						{post.user?.username}
					</span>
				</Link>
			</div>
			<div className="flex items-center gap-1">
				<div className="flex items-center pb-1.5">
					<i className="fa-solid fa-period opacity-40" />
				</div>
				<span className="text-sm font-normal text-slate-400">
					{timeDisplay}
				</span>
			</div>
		</div>
	);
};

export default PostPreviewHeader;

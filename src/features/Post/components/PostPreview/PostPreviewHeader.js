import { Avatar } from '@mui/material';
import { intlFormatDistance } from 'date-fns';

const PostPreviewHeader = ({ post }) => {
	return (
		<div className="flex items-center gap-2 font-thin">
			<Avatar
				className="h-6 w-6"
				src={post.user?.avatar}
				alt={post.user?.username}
			/>
			<span className="text-sm">{post.user?.username}</span>
			<div className="flex gap-1 text-sm text-slate-600">
				<div className="flex h-full opacity-50">
					<i className="fa-solid fa-period"></i>
				</div>
				<span>{intlFormatDistance(post.createdDate, new Date())}</span>
			</div>
		</div>
	);
};

export default PostPreviewHeader;

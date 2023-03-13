import { IconButton } from '@mui/material';
import MenuTrigger from '../../../components/MenuTrigger/MenuTrigger';
import PostMenu from './PostPreview/PostPreviewMenu';
import { usePost } from '../context/PostContext';
import { useSelector } from 'react-redux';

const PostAction = ({ post }) => {
	const { updateBookmark } = usePost();
	const handleBookmark = () => {
		updateBookmark(post.id);
	};

	const isBookmarked = useSelector((state) =>
		state.bookmark.postIds.includes(post.id),
	);

	return (
		<div className="flex gap-2">
			<div onClick={handleBookmark}>
				<IconButton size="small" className="h-8 w-8">
					<i
						className={`${
							isBookmarked ? 'fa-solid' : 'fa-light'
						} fa-bookmark`}
					></i>
				</IconButton>
			</div>
			<div>
				<IconButton size="small" className="h-8 w-8">
					<i className="fa-light fa-circle-minus"></i>
				</IconButton>
			</div>
			<MenuTrigger>
				<PostMenu post={post} />
			</MenuTrigger>
		</div>
	);
};

export default PostAction;

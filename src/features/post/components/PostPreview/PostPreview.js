import { PostProvider, usePost } from '../../context/PostContext';

import { ArchiveBoxXMarkIcon } from '../../../../components/Icons';
import { Button } from '@mui/material';
import PostPreviewBody from './PostPreviewBody';
import PostPreviewHeader from './PostPreviewHeader';

const PostPreview = ({
	post,
	onDelete,
	updatePost,
	onUpdateBookmark,
	onPublish,
}) => {
	return (
		<PostProvider
			post={post}
			onDeletePost={onDelete}
			onUpdatePost={updatePost}
			onUpdateBookmark={onUpdateBookmark}
			onUpdatePublish={onPublish}
		>
			{post?.isHide ? (
				<PostHidden />
			) : (
				<div>
					<PostPreviewHeader />
					<PostPreviewBody post={post} />
				</div>
			)}
		</PostProvider>
	);
};

function PostHidden() {
	const { unHidePost } = usePost();
	return (
		<div className="flex items-center justify-between pb-8">
			<div className="flex items-center gap-2 text-gray-700">
				<ArchiveBoxXMarkIcon className="h-6 w-6" />
				<span className="font-bold">Post hidden</span>
			</div>
			<Button
				variant="contained"
				disableElevation
				onClick={unHidePost}
				className="bg-gray-100 capitalize text-gray-700"
			>
				Undo
			</Button>
		</div>
	);
}
export default PostPreview;

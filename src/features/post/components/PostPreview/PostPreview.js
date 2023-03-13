import PostPreviewBody from './PostPreviewBody';
import PostPreviewHeader from './PostPreviewHeader';
import { PostProvider } from '../../context/PostContext';

const PostPreview = ({ post, onDelete, updatePost }) => {
	return (
		<PostProvider
			post={post}
			onDeletePost={onDelete}
			onUpdatePost={updatePost}
		>
			<PostPreviewHeader />
			<PostPreviewBody post={post} />
		</PostProvider>
	);
};

export default PostPreview;

import PostPreviewBody from './PostPreviewBody';
import PostPreviewHeader from './PostPreviewHeader';
const PostPreview = ({ post }) => {
	return (
		<div>
			<PostPreviewHeader post={post} />
			<PostPreviewBody post={post} />
		</div>
	);
};

export default PostPreview;

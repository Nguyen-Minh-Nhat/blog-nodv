import PostPreviewBody from './PostPreviewBody';
import PostPreviewHeader from './PostPreviewHeader';
const PostPreview = ({ post, ...menuActionProps }) => {
	return (
		<div>
			<PostPreviewHeader post={post} />
			<PostPreviewBody post={post} {...menuActionProps} />
		</div>
	);
};

export default PostPreview;

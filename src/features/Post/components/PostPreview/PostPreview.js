import PostPreviewBody from './PostPreviewBody';
import PostPreviewHeader from './PostPreviewHeader';
const PostPreview = ({ post }) => {
	return (
		<div>
			<div>
				<PostPreviewHeader post={post} />
				<PostPreviewBody post={post} />
			</div>
		</div>
	);
};

export default PostPreview;

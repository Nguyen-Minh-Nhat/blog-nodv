import PostAction from '../PostAction';
import TopicList from './TopicList';

const PostPreviewFooter = ({ post, ...menuActionProps }) => {
	return (
		<div className="flex justify-between py-8">
			<div className="flex items-center gap-2">
				{post?.topics?.length > 0 && (
					<TopicList topics={post.topics} limitDisplay={1} />
				)}
				<div className="text-sm font-thin">{post?.timeRead} min read</div>
			</div>
			<PostAction post={post} {...menuActionProps} />
		</div>
	);
};

export default PostPreviewFooter;

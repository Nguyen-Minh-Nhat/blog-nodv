import PostPreview from './PostPreview';

export const PostList = ({ postList = [] }) => {
	return (
		<div className="flex flex-col">
			{postList.map((post) => (
				<div key={post.id} className="border-b pt-8 first:pt-0">
					<PostPreview post={post} />
				</div>
			))}
		</div>
	);
};

export default PostList;

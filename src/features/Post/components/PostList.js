import PostPreview from './PostPreview';

const PostList = ({ postList = [] }) => {
	return (
		<div className="flex flex-col">
			{postList.map((post) => (
				<div key={post.id} className="border-t pt-6 first:border-none">
					<PostPreview post={post} />
				</div>
			))}
		</div>
	);
};

export default PostList;

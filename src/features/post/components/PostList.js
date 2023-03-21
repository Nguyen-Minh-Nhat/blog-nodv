import PostPreview from './PostPreview';
import { useQueryClient } from 'react-query';

export const PostList = ({
	postList = [],
	storeKey = 'posts',
	isDeleteOnBookmark = false,
	isDeleteOnPublish = false,
}) => {
	const queryClient = useQueryClient();

	const updateLocalPost = (updatedPost) => {
		queryClient.setQueryData(storeKey, (oldData) => {
			const { pages } = oldData;
			const newPages = pages.map((page) => {
				if (page.number !== updatedPost.page) return page;
				return {
					...page,
					content: page.content.map((post) => {
						if (post.id !== updatedPost.id) return post;
						return updatedPost;
					}),
				};
			});
			return {
				...oldData,
				pages: newPages,
			};
		});
	};
	const deleteLocalPost = (postDelete) => {
		queryClient.setQueryData(storeKey, (oldData) => {
			const { pages } = oldData;
			const newPages = pages.map((page) => {
				if (page.number !== postDelete.page) return page;
				return {
					...page,
					content: page.content.filter(
						(post) => post.id !== postDelete.id,
					),
				};
			});
			return {
				...oldData,
				pages: newPages,
			};
		});
	};

	return (
		<div className="flex flex-col gap-8">
			{postList?.length ? (
				postList?.map((post) => (
					<div key={post.id} className="border-b first:pt-0">
						<PostPreview
							post={post}
							onDelete={deleteLocalPost}
							updatePost={updateLocalPost}
							onUpdateBookmark={
								isDeleteOnBookmark ? deleteLocalPost : null
							}
							onPublish={
								isDeleteOnPublish ? deleteLocalPost : null
							}
						/>
					</div>
				))
			) : (
				<div className="text-center text-gray-500">No posts found</div>
			)}
		</div>
	);
};

export default PostList;

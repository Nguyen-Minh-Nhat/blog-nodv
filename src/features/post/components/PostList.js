import PostPreview from './PostPreview';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost, publishPost, unpublishPost } from '../../../api/postApi';
import { toast } from 'react-toastify';

export const PostList = ({ postList = [] }) => {
	const queryClient = useQueryClient();
	const updateLocalPost = (updatedPost) => {
		queryClient.setQueryData('posts', (oldData) =>
			oldData.map((post) => {
				if (post.id === updatedPost.id) {
					return updatedPost;
				}
				return post;
			})
		);
	};
	const deleteLocalPost = (postId) => {
		queryClient.setQueryData('posts', (oldData) => {
			const newPostList = oldData.filter((post) => post.id !== postId);
			return newPostList;
		});
	};
	const deletePostMutation = useMutation(deletePost, {
		onSuccess: (id) => {
			deleteLocalPost(id);
			toast.success('Post deleted successfully');
		},
	});

	const publishPostMutation = useMutation(publishPost, {
		onSuccess: (data) => {
			updateLocalPost(data);
			toast.success('Post was published');
		},
	});

	const unpublishPostMutation = useMutation(unpublishPost, {
		onSuccess: (data) => {
			updateLocalPost(data);
			toast.success('Post was unpublished ');
		},
	});
	return (
		<div className="flex flex-col">
			{postList.map((post) => (
				<div key={post.id} className="border-b pt-8 first:pt-0">
					<PostPreview
						post={post}
						onDelete={deletePostMutation.mutate}
						onPublish={publishPostMutation.mutate}
						onUnpublish={unpublishPostMutation.mutate}
					/>
				</div>
			))}
		</div>
	);
};

export default PostList;

import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updatePostToBookmark } from '../../../api/bookmarkApi';
import {
	deletePost,
	hidePost,
	publishPost,
	unpublishPost,
} from '../../../api/postApi';
import { updatePostByIdToBookmark } from '../../../redux/slices/bookmarkSlice';
import PostPreview from './PostPreview';

export const PostList = ({
	postList = [],
	storeKey = 'posts',
	postIdsHide = [],
	postIdsBookmark = [],
}) => {
	const queryClient = useQueryClient();

	const dispatch = useDispatch();

	const updateLocalPost = (updatedPost) => {
		queryClient.setQueryData(storeKey, (oldData) =>
			oldData.map((post) => {
				if (post.id === updatedPost.id) {
					return updatedPost;
				}
				return post;
			})
		);
	};
	const deleteLocalPost = (postId) => {
		queryClient.setQueryData(storeKey, (oldData) => {
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

	const updateBookmarkMutation = useMutation(updatePostToBookmark, {
		onSuccess: (data) => {
			dispatch(updatePostByIdToBookmark(data));
		},
	});

	const hidePostMutation = useMutation(hidePost, {
		onSuccess: (id) => {
			deleteLocalPost(id.pop());
		},
	});
	return (
		<div className="flex flex-col">
			{postList?.length ? (
				postList?.map((post) => (
					<div
						key={post.id}
						className={`${
							postIdsHide?.includes(post.id) ? 'hidden' : ''
						} border-b pt-8 first:pt-0`}
					>
						<PostPreview
							post={post}
							isBookmarked={postIdsBookmark?.includes(post.id)}
							onUpdateBookmark={updateBookmarkMutation.mutate}
							onDelete={deletePostMutation.mutate}
							onPublish={publishPostMutation.mutate}
							onUnpublish={unpublishPostMutation.mutate}
							onHidePost={hidePostMutation.mutate}
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

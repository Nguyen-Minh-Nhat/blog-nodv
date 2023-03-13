import { hidePost, publishPost, unPublishPost } from '../../../api/postApi';
import { useMutation, useQueryClient } from 'react-query';

import PostPreview from './PostPreview';
import { toast } from 'react-toastify';
import { updatePostByIdToBookmark } from '../../../redux/slices/bookmarkSlice';
import { updatePostToBookmark } from '../../../api/bookmarkApi';
import { useDispatch } from 'react-redux';

export const PostList = ({
	postList = [],
	storeKey = 'posts',
	postIdsHide = [],
}) => {
	const queryClient = useQueryClient();

	const dispatch = useDispatch();

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

	const publishPostMutation = useMutation(publishPost, {
		onSuccess: (data) => {
			updateLocalPost(data);
			toast.success('Post was published');
		},
	});

	const unpublishPostMutation = useMutation(unPublishPost, {
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
							onUpdateBookmark={updateBookmarkMutation.mutate}
							onDelete={deleteLocalPost}
							updatePost={updateLocalPost}
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

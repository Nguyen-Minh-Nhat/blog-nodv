import { createContext, useContext } from 'react';
import {
	deletePost,
	hidePost,
	publishPost,
	unPublishPost,
} from '../../../api/postApi';

import { toast } from 'react-toastify';
import { updatePostByIdToBookmark } from '../../../redux/slices/bookmarkSlice';
import { updatePostToBookmark } from '../../../api/bookmarkApi';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';

const postContext = createContext({
	post: {},
	deletePost: () => {},
	publishPost: () => {},
	unPublishPost: () => {},
	updateBookmark: () => {},
	hidePost: () => {},
});

export default postContext;

export const usePost = () => {
	return useContext(postContext);
};

export const PostProvider = ({
	onDeletePost = () => {},
	onUpdateBookmark = () => {},
	onHidePost = () => {},
	onUpdatePost = () => {},
	post = {},
	children,
}) => {
	const dispatch = useDispatch();

	const deletePostMutation = useMutation(deletePost, {
		onSuccess: () => {
			onDeletePost(post);
			toast.success('Post deleted successfully');
		},
	});

	const publishPostMutation = useMutation(publishPost, {
		onSuccess: () => {
			onUpdatePost({ ...post, isPublish: true });
			toast.success('Post was published');
		},
	});

	const unPublishPostMutation = useMutation(unPublishPost, {
		onSuccess: () => {
			onUpdatePost({ ...post, isPublish: false });
			toast.success('Post was unpublished ');
		},
	});

	const updateBookmarkMutation = useMutation(updatePostToBookmark, {
		onSuccess: (data) => {
			onUpdateBookmark(data);
			dispatch(updatePostByIdToBookmark(data));
		},
	});

	const hidePostMutation = useMutation(hidePost, {
		onSuccess: (id) => {
			onHidePost(id);
		},
	});

	return (
		<postContext.Provider
			value={{
				post,
				deletePost: deletePostMutation.mutate,
				publishPost: publishPostMutation.mutate,
				unPublishPost: unPublishPostMutation.mutate,
				updateBookmark: updateBookmarkMutation.mutate,
				hidePost: hidePostMutation.mutate,
			}}
		>
			{children}
		</postContext.Provider>
	);
};

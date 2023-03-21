import { createContext, useContext } from 'react';
import {
	deletePost,
	hidePost,
	publishPost,
	unHidePost,
	unPublishPost,
} from '../../../api/postApi';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { updatePostToBookmark } from '../../../api/bookmarkApi';
import { updateUserInfo } from '../../../redux/slices/userSlice';
import { useMemo } from 'react';
import { useMutation } from 'react-query';

const postContext = createContext({
	post: {},
	deletePost: () => {},
	publishPost: () => {},
	unPublishPost: () => {},
	updateBookmark: () => {},
	hidePost: () => {},
	unHidePost: () => {},
});

export default postContext;

export const usePost = () => {
	return useContext(postContext);
};

export const PostProvider = ({
	onDeletePost = () => {},
	onUpdateBookmark,
	onUpdatePost = () => {},
	onUpdatePublish,
	post = {},
	children,
}) => {
	const dispatch = useDispatch();
	const bookmarkIds = useSelector(
		(state) => state.user?.data?.info?.bookmarkIds,
	);
	const isBookmarked = useMemo(() => {
		return bookmarkIds?.includes(post.id);
	}, [bookmarkIds, post.id]);

	const deletePostMutation = useMutation(deletePost, {
		onSuccess: () => {
			onDeletePost(post);
			toast.success('Post deleted successfully');
		},
	});

	const publishPostMutation = useMutation(publishPost, {
		onSuccess: () => {
			onUpdatePost({ ...post, isPublish: true });
			onUpdatePublish && onUpdatePublish(post);
			toast.success('Post was published');
		},
	});

	const unPublishPostMutation = useMutation(unPublishPost, {
		onSuccess: () => {
			onUpdatePost({ ...post, isPublish: false });
			onUpdatePublish && onUpdatePublish(post);
			toast.success('Post was unpublished ');
		},
	});

	const updateBookmarkMutation = useMutation(updatePostToBookmark, {
		onSuccess: () => {
			onUpdateBookmark && onUpdateBookmark(post);
			let newBookmarkIds = [...bookmarkIds];
			if (isBookmarked) {
				newBookmarkIds = newBookmarkIds.filter((id) => id !== post.id);
			} else {
				newBookmarkIds.push(post.id);
			}
			dispatch(updateUserInfo({ bookmarkIds: newBookmarkIds }));
		},
	});

	const hidePostMutation = useMutation(hidePost, {
		onSuccess: (id) => {
			onUpdatePost({
				...post,
				isHide: true,
			});
		},
	});
	const unHidePostMutation = useMutation(unHidePost, {
		onSuccess: () => {
			onUpdatePost({
				...post,
				isHide: false,
			});
		},
	});

	return (
		<postContext.Provider
			value={{
				post: { ...post, isBookmarked },
				deletePost: deletePostMutation.mutate,
				publishPost: publishPostMutation.mutate,
				unPublishPost: unPublishPostMutation.mutate,
				updateBookmark: updateBookmarkMutation.mutate,
				hidePost: hidePostMutation.mutate,
				unHidePost: () => unHidePostMutation.mutate(post.id),
			}}
		>
			{children}
		</postContext.Provider>
	);
};

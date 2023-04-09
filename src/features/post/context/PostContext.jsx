import {
	Button,
	FormControl,
	FormControlLabel,
	Modal,
	Radio,
	RadioGroup,
	TextareaAutosize,
} from '@mui/material';
import { createContext, useContext } from 'react';
import {
	deletePost,
	hidePost,
	publishPost,
	unHidePost,
	unPublishPost,
} from '../../../api/postApi';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useRef, useState } from 'react';

import { createReport } from '../../../api/reportApi';
import { toast } from 'react-toastify';
import { updatePostToBookmark } from '../../../api/bookmarkApi';
import { updateUserInfo } from '../../../redux/slices/userSlice';
import { useMutation } from 'react-query';

const postContext = createContext({
	post: {},
	deletePost: () => {},
	publishPost: () => {},
	unPublishPost: () => {},
	updateBookmark: () => {},
	hidePost: () => {},
	unHidePost: () => {},
	setShowReportModal: () => {},
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

	const [showReportModal, setShowReportModal] = useState(false);
	const { isLoading, mutate } = useMutation(createReport, {
		onSuccess: () => {
			toast.success('Reported successfully');
			setShowReportModal(false);
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
				setShowReportModal,
			}}
		>
			{children}
			<ReportModal
				showReportModal={showReportModal}
				setShowReportModal={setShowReportModal}
				isLoading={isLoading}
				onSubmit={(value) => {
					mutate({
						objectId: post.id,
						content: value,
						type: 'POST',
					});
				}}
			/>
		</postContext.Provider>
	);
};

function ReportModal({
	showReportModal,
	setShowReportModal,
	onSubmit,
	isLoading,
}) {
	const [reason, setReason] = useState('spam');
	const handleReasonChange = (event) => {
		setReason(event.target.value);
	};
	const showTextarea = reason === 'other';

	const handleSubmit = () => {
		if (showTextarea) {
			if (!textareaRef.current.value.trim()) {
				toast.error('Please enter your reason');
				return;
			}
			onSubmit(textareaRef.current.value);
			return;
		}
		onSubmit(reason);
	};

	const textareaRef = useRef(null);

	return (
		<Modal open={showReportModal}>
			<div className="position-center absolute flex h-96 w-96 flex-col rounded-xl bg-white">
				<div className="h-14 p-4 text-xl font-bold">
					Report this post
				</div>
				<FormControl className="flex-1 px-4">
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="spam"
						name="radio-buttons-group"
						onChange={handleReasonChange}
					>
						{['Spam', 'Inappropriate', 'Other'].map(
							(item, index) => (
								<FormControlLabel
									key={index}
									value={item.toLowerCase()}
									control={<Radio />}
									label={item}
								/>
							),
						)}
						{showTextarea && (
							<TextareaAutosize
								ref={textareaRef}
								aria-label="other reason"
								className="h-32 w-full rounded bg-slate-50 p-2"
								placeholder="describe your reason"
							/>
						)}
					</RadioGroup>
					<div className="mt-auto flex justify-end gap-4 py-4">
						<Button onClick={() => setShowReportModal(false)}>
							Cancel
						</Button>
						<Button variant="contained" onClick={handleSubmit}>
							Report
						</Button>
					</div>
				</FormControl>
			</div>
		</Modal>
	);
}

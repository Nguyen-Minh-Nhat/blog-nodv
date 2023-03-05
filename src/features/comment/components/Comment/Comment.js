import {
	createComment,
	deleteComment,
	updateCommentApi,
} from '../../../../api/commentApi';
import { memo, useMemo, useState } from 'react';

import CommentBody from './CommentBody';
import CommentEditor from '../CommentEditor';
import CommentFooter from './CommentFooter';
import CommentHeader from './CommentHeader';
import CommentList from '../CommentList';
import { NotificationType } from '../../../../config/dataType';
import QuestionDialog from '../../../../components/QuestionDialog';
import { callApiCreateNotification } from '../../../../utils/generationNotification';
import { createNotification } from '../../../../api/notificationApi';
import { updateCountNotifications } from '../../../../api/userApi';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';

const Comment = ({ comment, post }) => {
	const user = useSelector((state) => state.user.data.info);
	const replyComments = useSelector(
		(state) => state.comment.commentsByParentId[comment.id],
	);

	const rootComments = useSelector((state) => state.comment.list);
	const [isReply, setIsReply] = useState(false);
	const [isShowReply, setIsShowReply] = useState(false);
	const [isDelete, setIsDelete] = useState(false);
	const [isEdit, setIsEdit] = useState(false);

	const isUser = useMemo(() => {
		return comment.userId === user.id;
	}, [comment.userId, user.id]);

	const handleCloseDialog = () => {
		setIsDelete(false);
	};
	const deleteCommentById = useMutation(deleteComment);
	const handleDeleteComment = (comment) => {
		deleteCommentById.mutate(comment.id);
	};

	const updateCommentById = useMutation(updateCommentApi);
	const handleUpdateComment = (comment) => {
		updateCommentById.mutate(comment);
		setIsEdit(false);
	};

	const createNewReplyComment = useMutation(createComment, {
		onSuccess: (data) => {
			// dispatch(addComment(data));
			let comment = {
				...data,
				commentParentUserId: getCommentUserId(data),
			};
			callApiCreateNotification(
				comment,
				NotificationType.REPLYCOMMENT,
				createNewNotificationReplyComment,
				user.id,
			);
		},
	});

	const updateUserIncreaseNumOfNotification = useMutation(
		updateCountNotifications,
	);

	const createNewNotificationReplyComment = useMutation(createNotification, {
		onSuccess: (data) => {
			const Increase = {
				isIncrease: true,
				userId: data.receiverId,
			};
			updateUserIncreaseNumOfNotification.mutate(Increase);
		},
	});
	const getCommentUserId = (comment) => {
		var parentComment = rootComments.find(
			(commentParent) => comment.replyId === commentParent.id,
		);
		return parentComment.userId;
	};
	const handleReply = (comment) => {
		createNewReplyComment.mutate(comment);
		// let data = comment;
		// data.commentParentUserId = getCommentUserId(comment);
		// callApiCreateNotification(
		//   data,
		//   NotificationType.REPLYCOMMENT,
		//   createNewNotificationReplyComment,
		//   user.id
		// );
		// const Increase = {
		//   isIncrease: true,
		//   userId: data.commentParentUserId,
		// };
		// updateUserIncreaseNumOfNotification.mutate(Increase);
		setIsReply(false);
		setIsShowReply(true);
	};

	const handleConfirmDeleteComment = (comment) => {
		handleCloseDialog();
		handleDeleteComment(comment);
	};
	return (
		<>
			<div className="pt-6 pb-4">
				{isEdit ? (
					<div className="-mx-6">
						<CommentEditor
							hideHeader
							focus
							isEdit
							post={post}
							initialComment={comment}
							onCancel={() => setIsEdit(false)}
							onSubmit={handleUpdateComment}
						/>
					</div>
				) : (
					<>
						<CommentHeader
							comment={comment}
							isUser={isUser}
							onEdit={() => setIsEdit(true)}
							onDelete={() => setIsDelete(true)}
						/>
						<CommentBody comment={comment} />
						<CommentFooter
							onComment={() => {
								setIsReply((prev) => !prev);
							}}
							onShowReply={() => setIsShowReply((prev) => !prev)}
							numReplyComments={replyComments?.length}
							isShowReply={isShowReply}
							comment={comment}
						/>
					</>
				)}
			</div>

			{(isShowReply || isReply) && (
				<div className="mb-6 ml-3 border-l-2">
					{isReply && (
						<CommentEditor
							hideHeader
							focus
							onCancel={() => setIsReply(false)}
							initialComment={{
								replyId: comment.id,
							}}
							onSubmit={handleReply}
							post={post}
						/>
					)}
					{isShowReply && replyComments?.length > 0 && (
						<CommentList comments={replyComments} post={post} />
					)}
				</div>
			)}

			<QuestionDialog
				open={isDelete}
				onCancel={handleCloseDialog}
				onConfirm={() => handleConfirmDeleteComment(comment)}
				title="Delete"
				message="Deleted comment are gone forever.Are you sure?"
				comment={comment}
			/>
		</>
	);
};

export default memo(Comment);

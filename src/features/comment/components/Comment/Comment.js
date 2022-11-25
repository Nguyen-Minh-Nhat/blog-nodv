import { memo, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentEditor from '../CommentEditor';
import CommentList from '../CommentList';
import CommentBody from './CommentBody';
import CommentFooter from './CommentFooter';
import CommentHeader from './CommentHeader';
import QuestionDialog from '../../../../components/QuestionDialog';
import {
	addComment,
	removeComment,
	updateComment,
} from '../../../../redux/slices/commentSlice';
import uuid from 'react-uuid';

const Comment = ({ comment }) => {
	const { id: userId } = useSelector((state) => state.user.data.info);
	const replyComments = useSelector(
		(state) => state.comment.commentsByParentId[comment.id]
	);

	const [isReply, setIsReply] = useState(false);
	const [isShowReply, setIsShowReply] = useState(false);
	const [isDelete, setIsDelete] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const dispatch = useDispatch();

	const isUser = useMemo(() => {
		return comment.user.id === userId;
	}, [comment.user.id, userId]);

	const handleCloseDialog = () => {
		setIsDelete(false);
	};

	const handleDeleteComment = () => {
		dispatch(removeComment(comment.id));
	};

	const handleUpdateComment = (comment) => {
		dispatch(updateComment(comment));
		setIsEdit(false);
	};

	const handleReply = (comment) => {
		dispatch(addComment(comment));
		setIsReply(false);
		setIsShowReply(true);
	};

	const handleConfirmDeleteComment = () => {
		handleCloseDialog();
		handleDeleteComment();
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
							onComment={() => setIsReply((prev) => !prev)}
							onShowReply={() => setIsShowReply((prev) => !prev)}
							numReplyComments={replyComments?.length}
							isShowReply={isShowReply}
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
								id: uuid(),
								replyId: comment.id,
								createdDate: new Date(),
							}}
							onSubmit={handleReply}
						/>
					)}
					{isShowReply && replyComments?.length > 0 && (
						<CommentList comments={replyComments} />
					)}
				</div>
			)}

			<QuestionDialog
				open={isDelete}
				onCancel={handleCloseDialog}
				onConfirm={handleConfirmDeleteComment}
				title="Delete"
				message="Deleted comment are gone forever.Are you sure?"
			/>
		</>
	);
};

export default memo(Comment);

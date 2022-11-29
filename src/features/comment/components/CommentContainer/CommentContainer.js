import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { addComment } from '../../../../redux/slices/commentSlice';
import AuthClick from '../../../auth/components/AuthClick';
import CommentEditor from '../CommentEditor';
import CommentList from '../CommentList';
import CommentContainerHeader from './CommentContainerHeader';

const CommentContainer = ({ onClose }) => {
	const dispatch = useDispatch();
	const rootComments = useSelector(
		(state) => state.comment.commentsByParentId[undefined]
	);

	const handleCreateComment = (comment) => {
		dispatch(addComment(comment));
	};

	const initialComment = { id: uuid(), createdDate: new Date() };

	return (
		<div className="w-[414px]">
			<CommentContainerHeader onClose={onClose} />
			<AuthClick>
				<CommentEditor
					initialComment={initialComment}
					onSubmit={handleCreateComment}
				/>
			</AuthClick>
			{rootComments != null && rootComments.length > 0 && (
				<div className="mt-4">
					<CommentList comments={rootComments} />
				</div>
			)}
		</div>
	);
};

export default CommentContainer;

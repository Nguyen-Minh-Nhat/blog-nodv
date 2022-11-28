import { Collapse } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CommentEditorFooter from './CommentEditorFooter';
import CommentEditorHeader from './CommentEditorHeader';
import CommentEditorInput from './CommentEditorInput';

const CommentEditor = ({
	focus,
	isEdit,
	hideHeader,
	initialComment = {},
	onCancel = () => {},
	onSubmit,
}) => {
	const [isFocused, setIsFocused] = useState(focus);
	const [inputValue, setInputValue] = useState(
		initialComment?.content ? initialComment.content : ''
	);
	const user = useSelector((state) => state.user.data.info);
	const handleFocus = () => {
		setIsFocused(true);
	};
	const handleCancel = () => {
		setIsFocused(false);
		onCancel();
	};

	const handleSubmit = () => {
		const comment = {
			id: initialComment.id,
			content: inputValue.trim(),
			user,
			createdDate: initialComment?.createdDate,
			replyId: initialComment?.replyId,
		};
		setInputValue('');
		onSubmit(comment);
	};

	return (
		<div className="mx-6 rounded py-4 shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
			<Collapse orientation="vertical" in={isFocused && !hideHeader}>
				<CommentEditorHeader />
			</Collapse>
			<CommentEditorInput
				value={inputValue}
				onFocus={handleFocus}
				isFocused={isFocused}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
			/>
			<Collapse orientation="vertical" in={isFocused}>
				<CommentEditorFooter
					onCancel={handleCancel}
					onSubmit={handleSubmit}
					disabled={inputValue.trim() === ''}
					isEdit={isEdit}
				/>
			</Collapse>
		</div>
	);
};

export default CommentEditor;

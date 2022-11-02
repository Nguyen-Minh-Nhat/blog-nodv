import { Button } from '@mui/material';

const CommentEditorFooter = ({ onCancel, onSubmit, disabled, isEdit }) => {
	return (
		<div className="mt-4 flex justify-end gap-2 px-4">
			<Button color="inherit" size="small" className="btn" onClick={onCancel}>
				Cancel
			</Button>
			<Button
				onClick={onSubmit}
				variant="contained"
				color="success"
				size="small"
				className="btn"
				disabled={disabled}
			>
				{isEdit ? 'Update' : 'Comment'}
			</Button>
		</div>
	);
};

export default CommentEditorFooter;

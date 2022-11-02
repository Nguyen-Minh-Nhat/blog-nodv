import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';

const QuestionDialog = ({
	title,
	message,
	open,
	onClose,
	onConfirm,
	onCancel,
}) => {
	return (
		<div>
			<div>
				<Dialog
					open={open}
					onClose={onClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							{message}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button className="btn" onClick={onCancel}>
							Cancel
						</Button>
						<Button
							variant="contained"
							onClick={onConfirm}
							className="btn rounded-full"
							autoFocus
						>
							Confirm
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
};

export default QuestionDialog;

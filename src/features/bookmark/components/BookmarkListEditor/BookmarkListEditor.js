import {
	Button,
	Checkbox,
	DialogActions,
	FormControlLabel,
	IconButton,
	TextField,
} from '@mui/material';

const BookmarkListEditor = ({ onClose }) => {
	return (
		<>
			<div className="w-[700px] rounded-lg bg-white">
				<div className="mb-4 flex items-center justify-between gap-2 border-b px-6 py-4">
					<h2 className="text-xl font-bold">"hello"</h2>
					<div className="flex gap-4">
						<IconButton
							size="small"
							className="h-10 w-10 bg-slate-50 hover:bg-slate-100"
							onClick={onClose}
						>
							<i className="fa-solid fa-xmark"></i>
						</IconButton>
					</div>
				</div>
				<div className="mx-6 pb-6">
					<TextField
						autoFocus
						margin="normal"
						id="name"
						label="List name"
						fullWidth
						variant="standard"
					/>
					<TextField
						margin="normal"
						id="description"
						label="Description"
						fullWidth
						variant="standard"
					/>
					<FormControlLabel
						control={<Checkbox />}
						label="Make it private"
						className="mt-4"
					/>
					<DialogActions>
						<Button className="btn" onClick={onClose} color="inherit">
							Cancel
						</Button>
						<Button className="btn" color="success" variant="contained">
							Submit
						</Button>
					</DialogActions>
				</div>
			</div>
		</>
	);
};

export default BookmarkListEditor;

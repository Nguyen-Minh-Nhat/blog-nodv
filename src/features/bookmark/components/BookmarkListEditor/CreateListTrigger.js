import {
	Button,
	Checkbox,
	DialogActions,
	FormControlLabel,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';
import Dialog from '../../../../components/Dialog';

const CreateListTrigger = () => {
	const [showForm, setShowForm] = useState(false);
	const handleClose = () => {
		setShowForm(false);
	};
	return (
		<>
			<Button
				onClick={() => setShowForm(true)}
				className="btn"
				variant="contained"
				color="success"
			>
				Create list
			</Button>
			<Dialog open={showForm} title="Create new list" onClose={handleClose}>
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
					<Button className="btn" onClick={handleClose} color="inherit">
						Cancel
					</Button>
					<Button className="btn" color="success" variant="contained">
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default CreateListTrigger;

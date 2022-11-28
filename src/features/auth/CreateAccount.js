import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
const CreateAccount = ({ accountInfo, onBack, onSubmit }) => {
	const [username, setUsername] = useState(accountInfo?.username || '');
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ ...accountInfo, username: e.target[0].value });
	};
	return (
		<div className="flex h-full w-full items-center justify-center">
			<form className="text-center" onSubmit={handleSubmit}>
				<div>
					<h2 className="mb-4 text-2xl text-slate-600">Almost there!</h2>
					<span>
						Finish creating your account for the full
						{process.env.REACT_APP_NAME} experience.
					</span>
				</div>

				<div className="my-10">
					<TextField
						name="username"
						id="standard-basic"
						label="Your username"
						variant="standard"
						className="w-full"
						placeholder="example: NhatDepTrai"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						autoFocus
					/>
					<div className="mt-6 flex flex-col gap-2">
						<span className="text-sm text-slate-500">Your email</span>
						<span>{accountInfo?.email}</span>
					</div>
				</div>
				<div>
					<div>
						<Button
							type="submit"
							variant="contained"
							className="btn rounded-full normal-case"
						>
							Create account
						</Button>
					</div>
					<Button
						onClick={onBack}
						className="btn mt-4 rounded-full normal-case"
					>
						Back
					</Button>
				</div>
			</form>
		</div>
	);
};

export default CreateAccount;

import React, { useState } from 'react';

import { Button } from '@mui/material';
import { setUser } from '../../../../redux/slices/userSlice';
import { updateUserProfile } from '../../../../api/userApi';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';

const AboutForm = ({ onClick, user }) => {
	const [newBio, setNewBio] = useState(user.bio != null ? user.bio : '');
	const dispatch = useDispatch();
	const updateUserBio = useMutation(updateUserProfile, {
		onSuccess: (data) => {
			dispatch(setUser(data));
			onClick();
		},
	});
	const userUpdate = { ...user };

	const handleUpdateUserBio = (user, newBio) => {
		user.bio = newBio;
		updateUserBio.mutate(user);
	};
	const handleClick = (user, newBio) => {
		handleUpdateUserBio(user, newBio);
	};
	return (
		<div>
			<input
				defaultValue={newBio}
				autoFocus
				className="h-[120px] w-full focus:outline-0"
				onChange={(e) => setNewBio(e.target.value)}
			/>
			<div className="flex justify-end">
				<Button
					variant="outlined"
					className="btn rounded-full border-stone-900 normal-case text-stone-900"
					size="medium"
					onClick={onClick}
				>
					Cancel
				</Button>
				<Button
					variant="contained"
					className="btn ml-3 rounded-full bg-stone-900 normal-case"
					size="medium"
					disableElevation
					onClick={() => handleClick(userUpdate, newBio)}
				>
					Save
				</Button>
			</div>
		</div>
	);
};

export default AboutForm;

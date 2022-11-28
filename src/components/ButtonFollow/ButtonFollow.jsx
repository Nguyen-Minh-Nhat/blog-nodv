import { Chip } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const ButtonFollow = ({ isFollowed = false, onClick = () => {} }) => {
	const [followed, setFollowed] = useState(isFollowed);

	const handleToggleFollow = () => {
		setFollowed(!followed);
		onClick(!followed);
	};

	return (
		<>
			<Chip
				label={followed ? 'Following' : 'Follow'}
				variant="outlined"
				className={followed ? 'bg-black text-white' : 'border-rgb'}
				onClick={handleToggleFollow}
			/>
		</>
	);
};

export default ButtonFollow;

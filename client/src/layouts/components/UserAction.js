import { Avatar } from '@mui/material';
import React from 'react';

const UserAction = () => {
	return (
		<div className="flex h-20 items-center justify-center">
			<Avatar sx={{ width: 36, height: 36 }} className="bg-slate-600">
				OP
			</Avatar>
		</div>
	);
};

export default UserAction;

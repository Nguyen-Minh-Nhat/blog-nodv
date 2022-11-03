import { Avatar } from '@mui/material';
import React from 'react';

const AccountQuickView = ({ user, subName }) => {
	return (
		<div className="flex items-center gap-2">
			<div className="h-8 w-8 rounded-full shadow-[0_0_0_1px_#2222]">
				<Avatar className="h-8 w-8" src={user.avatar} alt={user.username} />
			</div>
			<div className="flex flex-col justify-center">
				<span className="text-sm">{user.username}</span>
				{subName && <span className="text-sm text-slate-500">{subName}</span>}
			</div>
		</div>
	);
};

export default AccountQuickView;

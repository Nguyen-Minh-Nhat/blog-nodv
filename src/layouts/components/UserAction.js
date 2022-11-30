import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Popover } from 'react-tiny-popover';
import UserMenu from '../../components/UserMenu';
import { logout } from '../../redux/slices/userSlice';
import { appRoutes } from '../../routes/AppRoutes';

const UserAction = () => {
	const user = useSelector((state) => state.user.data.info);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		navigate(appRoutes.HOME);
		dispatch(logout());
	};

	return (
		<div className="mb-6 flex h-12 items-center justify-center">
			<Popover
				isOpen={isMenuOpen}
				positions={['top', 'right']}
				padding={10}
				containerStyle={{ marginLeft: '10px' }}
				onClickOutside={() => setIsMenuOpen(false)}
				content={<UserMenu user={user} onLogout={handleLogout} />}
			>
				<Avatar
					sx={{ width: 36, height: 36 }}
					className="cursor-pointer bg-slate-600"
					src={user?.avatar}
					alt={user?.username}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				/>
			</Popover>
		</div>
	);
};

export default UserAction;

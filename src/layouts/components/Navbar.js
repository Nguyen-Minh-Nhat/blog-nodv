import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { matchPath, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { appRoutes } from '../../routes/AppRoutes';

const Navbar = () => {
	const { pathname } = useLocation();
	const navbarItems = [
		{
			title: 'Home',
			icon: <i className="fa-light fa-house"></i>,
			iconActive: <i className="fa-solid fa-house"></i>,
			path: appRoutes.HOME,
		},
		{
			title: 'Notifications',
			icon: <i className="fa-light fa-bell"></i>,
			iconActive: <i className="fa-solid fa-bell"></i>,
			path: appRoutes.NOTIFICATION,
		},
		{
			title: 'Bookmark',
			icon: <i className="fa-light fa-bookmark"></i>,
			iconActive: <i className="fa-solid fa-bookmark"></i>,
			path: appRoutes.BOOKMARK,
		},
		{
			title: 'Stories',
			icon: <i className="fa-light fa-rectangle-history"></i>,
			iconActive: <i className="fa-solid fa-rectangle-history"></i>,
			path: appRoutes.STORIES,
		},
		{
			title: 'write',
			icon: <i className="fa-light fa-file-pen"></i>,
			iconActive: <i className="fa-solid fa-file-pen"></i>,
			path: appRoutes.WRITE,
		},
	];

	return (
		<div className="flex w-full flex-col gap-8 text-center">
			{navbarItems.map((item) => {
				const isActive = matchPath(item.path, pathname);
				return (
					<NavLink key={item.title} to={item.path} className="active">
						<Tooltip title={item.title} placement="right" arrow>
							<IconButton className={`h-10 w-10 text-xl text-black`}>
								{isActive ? item.iconActive : item.icon}
							</IconButton>
						</Tooltip>
					</NavLink>
				);
			})}
		</div>
	);
};

export default Navbar;

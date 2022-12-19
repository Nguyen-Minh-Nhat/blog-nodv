import { Badge, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { matchPath, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { updateCountNotifications } from '../../api/userApi';
import { setUser } from '../../redux/slices/userSlice';
import { appRoutes } from '../../routes/AppRoutes';

const Navbar = () => {
	const { pathname } = useLocation();
	const user = useSelector((state) => state.user.data.info);
	const socket = useSelector((state) => state.socket.data);

	const dispatch = useDispatch();

	const [numOfNotifications, setNumOfNotifications] = useState(
		user?.notificationsCount !== undefined ? user.notificationsCount : 0
	);

	const updateUserCountNotification = useMutation(updateCountNotifications, {
		onSuccess: (data) => {
			setNumOfNotifications(data.notificationsCount);
			dispatch(setUser(data));
		},
	});

	const handleClickNotification = () => {
		const data = {
			userId: user.id,
			isIncrease: false,
		};
		updateUserCountNotification.mutate(data);
	};

	const handleReceiveCountNotificationSocket = useCallback(
		(payload) => {
			const data = JSON.parse(payload.body);
			setNumOfNotifications(data.notificationsCount);
			dispatch(setUser(data));
		},
		[dispatch]
	);

	useEffect(() => {
		const topic = `/topic/notifications/${user.id}/countNotifications`;
		if (socket) {
			console.log('subscribing navbar');
			socket.subscribe(topic, handleReceiveCountNotificationSocket);
		}
		return () => {
			if (socket) {
				console.log('unsubscribing');
				socket.unsubscribe(topic);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socket]);

	const navbarItems = [
		{
			title: 'Home',
			icon: <i className="fa-light fa-house"></i>,
			iconActive: <i className="fa-solid fa-house"></i>,
			path: appRoutes.HOME,
		},
		{
			title: 'Notifications',
			icon: (
				<Badge badgeContent={numOfNotifications} color="success">
					<i className="fa-light fa-bell"></i>
				</Badge>
			),
			iconActive: <i className="fa-solid fa-bell"></i>,
			path: appRoutes.NOTIFICATION,
			onclick: handleClickNotification,
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
					<NavLink
						key={item.title}
						to={item.path}
						className="active"
						onClick={item?.onclick}
					>
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

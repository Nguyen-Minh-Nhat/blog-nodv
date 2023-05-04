import {
	DeleteIcon,
	EditIcon,
	EyeIcon,
	EyeSlashIcon,
	FlagIcon,
} from '../../../../components/Icons';
import { ListItemIcon, MenuItem, MenuList } from '@mui/material';

import { appRoutes } from '../../../../routes/AppRoutes';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePost } from '../../context/PostContext';
import { useSelector } from 'react-redux';

const PostMenu = ({ setOpen }) => {
	const {
		deletePost,
		hidePost,
		publishPost,
		unPublishPost,
		post,
		setShowReportModal,
	} = usePost();
	const userId = useSelector((state) => state.user?.data?.info?.id);
	const navigate = useNavigate();
	const isUser = post.user.id === userId;
	const menuItems = useMemo(() => {
		let items = [];
		if (isUser) {
			items = [
				...items,
				{
					icon: <EditIcon />,
					label: 'Edit',
					onClick: () => navigate(`${appRoutes.WRITE}/${post.id}`),
				},
				{
					icon: <DeleteIcon />,
					label: 'Delete',
					onClick: () => deletePost(post.id),
				},
				post.isPublish
					? {
							icon: <EyeSlashIcon />,
							label: 'Unpublish',
							onClick: () => unPublishPost(post.id),
					  }
					: {
							icon: <EyeIcon />,
							label: 'Publish',
							onClick: () => publishPost(post.id),
					  },
			];
		} else {
			items = [
				...items,
				{
					icon: <EyeIcon />,
					label: 'Hide this post',
					onClick: () => hidePost(post.id),
				},
				{
					icon: <FlagIcon />,
					label: 'Report this post',
					onClick: () => {
						setOpen(false);
						setShowReportModal(true);
					},
				},
			];
		}

		return items;
	}, [
		isUser,
		post.isPublish,
		post.id,
		navigate,
		deletePost,
		unPublishPost,
		publishPost,
		hidePost,
		setShowReportModal,
	]);
	return (
		<div className="flex min-w-[180px] flex-col justify-end bg-white">
			<MenuList>
				{menuItems.map((item) => (
					<MenuItem key={item.label} onClick={item.onClick}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						{item.label}
					</MenuItem>
				))}
			</MenuList>
		</div>
	);
};

export default PostMenu;

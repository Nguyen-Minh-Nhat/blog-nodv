import { ListItemIcon, MenuItem, MenuList } from '@mui/material';
import { useMemo } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
	deletePost,
	publishPost,
	unpublishPost,
} from '../../../../api/postApi';

import {
	DeleteIcon,
	EditIcon,
	EyeIcon,
	EyeSlashIcon,
	FlagIcon,
} from '../../../../components/Icons';
import { setPost } from '../../../../redux/slices/postSlice';

const PostMenu = ({ post }) => {
	const dispatch = useDispatch();
	const deletePostMutation = useMutation(deletePost, {
		onSuccess: () => {
			toast.success('Post deleted successfully');
		},
	});

	const publishPostMutation = useMutation(publishPost, {
		onSuccess: (data) => {
			dispatch(setPost(data.data));
			toast.success('Post was published');
		},
	});

	const unpublishPostMutation = useMutation(unpublishPost, {
		onSuccess: (data) => {
			dispatch(setPost(data.data));
			toast.success('Post was unpublished ');
		},
	});

	const userId = useSelector((state) => state.user?.data?.info?.id);
	const isUser = post.user.id === userId;

	const menuItems = useMemo(() => {
		let items = [];
		if (isUser) {
			items = [
				...items,
				{
					icon: <EditIcon />,
					label: 'Edit',
				},
				{
					icon: <DeleteIcon />,
					label: 'Delete',
					onClick: () => deletePostMutation.mutate(post.id),
				},
				post.isPublish
					? {
							icon: <EyeSlashIcon />,
							label: 'Unpublish',
							onClick: () => unpublishPostMutation.mutate(post.id),
					  }
					: {
							icon: <EyeIcon />,
							label: 'Publish',
							onClick: () => publishPostMutation.mutate(post.id),
					  },
			];
		} else {
			items = [
				...items,
				{
					icon: <EyeIcon />,
					label: 'Hide this post',
				},
				{
					icon: <FlagIcon />,
					label: 'Report this post',
				},
			];
		}

		return items;
	}, [
		deletePostMutation,
		isUser,
		post.id,
		post.isPublish,
		publishPostMutation,
		unpublishPostMutation,
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

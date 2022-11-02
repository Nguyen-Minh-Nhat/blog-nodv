import { ListItemIcon, MenuItem, MenuList } from '@mui/material';
import { useMemo } from 'react';

const CommentMenu = ({ onEdit, onDelete, onReport, isUser }) => {
	const Items = useMemo(() => {
		if (isUser)
			return (
				<MenuList>
					<MenuItem className="text-sm" onClick={onEdit}>
						<ListItemIcon>
							<i className="fa-solid fa-edit"></i>
						</ListItemIcon>
						Edit this comment
					</MenuItem>
					<MenuItem className="text-sm" onClick={onDelete}>
						<ListItemIcon>
							<i className="fa-solid fa-trash"></i>
						</ListItemIcon>
						Delete
					</MenuItem>
				</MenuList>
			);
		return (
			<MenuList>
				<MenuItem className="text-sm" onClick={onReport}>
					<ListItemIcon>
						<i className="fa-solid fa-flag"></i>
					</ListItemIcon>
					Report this comment
				</MenuItem>
			</MenuList>
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isUser]);

	return <div className="flex flex-col justify-end">{Items}</div>;
};

export default CommentMenu;

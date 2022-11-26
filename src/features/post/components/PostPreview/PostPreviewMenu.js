import { ListItemIcon, MenuItem, MenuList } from '@mui/material';

const PostMenu = ({ children }) => {
	return (
		<div className="flex flex-col justify-end">
			<MenuList>
				<MenuItem>
					<ListItemIcon>
						<i className="fa-solid fa-flag"></i>
					</ListItemIcon>
					Report
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<i className="fa-solid fa-eye-slash"></i>
					</ListItemIcon>
					Hide this post
				</MenuItem>
			</MenuList>
		</div>
	);
};

export default PostMenu;

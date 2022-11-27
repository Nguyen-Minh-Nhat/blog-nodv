import { Chip, ListItemIcon, MenuItem, MenuList } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import routes from '../../routes/route-paths';
import ShadowWrapper from '../ShadowWrapper';

const UserMenu = ({ user, onLogout }) => {
	const navigate = useNavigate();
	return (
		<ShadowWrapper>
			<div className="flex w-64 flex-col justify-end bg-white text-[#717171]">
				<MenuList>
					<MenuItem onClick={onLogout}>
						<ListItemIcon>
							<i className="fa-solid fa-right-from-bracket text-lg"></i>
						</ListItemIcon>
						Logout
					</MenuItem>
					<NavLink to={routes.setting} className="active">
						<MenuItem>
							<ListItemIcon>
								<i className="fa-solid fa-gear text-lg"></i>
							</ListItemIcon>
							Setting
						</MenuItem>
					</NavLink>
				</MenuList>
				<div className="border-t p-4">
					<div className="mb-4 flex flex-col">
						<span className="">{user?.username}</span>
						<span className="overflow-hidden text-ellipsis text-[13px] font-thin">
							{user?.email}
						</span>
					</div>
					<div>
						<Chip
							label="View Profile"
							variant="outlined"
							className="w-full"
							onClick={() => navigate(routes.profile)}
						/>
					</div>
				</div>
			</div>
		</ShadowWrapper>
	);
};

export default UserMenu;

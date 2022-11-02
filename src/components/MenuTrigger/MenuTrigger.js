import { IconButton, Popover } from '@mui/material';
import usePopover from '../../hooks/usePopover';
import IconWrapper from '../IconWrapper';

const MenuTrigger = ({ children }) => {
	const { id, handleClick, handleClose, anchorEl, open } = usePopover();
	return (
		<div>
			<IconButton size="small" onClick={handleClick}>
				<IconWrapper>
					<i className="fa-solid fa-ellipsis"></i>
				</IconWrapper>
			</IconButton>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				{children}
			</Popover>
		</div>
	);
};

export default MenuTrigger;

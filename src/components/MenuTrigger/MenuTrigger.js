import { IconButton } from '@mui/material';
import { useState } from 'react';
import IconWrapper from '../IconWrapper';
import Popover from '../Popover';

const MenuTrigger = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Popover visible={open} setVisible={setOpen} content={children}>
				<IconButton size="small" onClick={() => setOpen((prev) => !prev)}>
					<IconWrapper>
						<i className="fa-solid fa-ellipsis"></i>
					</IconWrapper>
				</IconButton>
			</Popover>
		</div>
	);
};

export default MenuTrigger;

import DotIcon from '../Icons/DotIcon';
import { IconButton } from '@mui/material';
import IconWrapper from '../IconWrapper';
import { Popover } from 'react-tiny-popover';
import ShadowWrapper from '../ShadowWrapper';
import { useState } from 'react';

const MenuTrigger = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<Popover
			isOpen={open}
			padding={4}
			positions={['bottom', 'top']}
			onClickOutside={() => setOpen(false)}
			content={
				<ShadowWrapper>
					{typeof children === 'function'
						? children({ setOpen })
						: children}
				</ShadowWrapper>
			}
			containerStyle={{ zIndex: 9999 }}
		>
			<IconButton size="small" onClick={() => setOpen(!open)}>
				<IconWrapper>
					<DotIcon />
				</IconWrapper>
			</IconButton>
		</Popover>
	);
};

export default MenuTrigger;

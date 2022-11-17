import { Popover as PopoverMui } from '@mui/material';
import { useEffect, useId, useRef, useState } from 'react';

const Popover = ({
	visible,
	setVisible,
	children,
	fullWidth,
	content,
	anchorOrigin = {
		vertical: 'bottom',
		horizontal: 'center',
	},
	transformOrigin = {
		vertical: 'top',
		horizontal: 'center',
	},
}) => {
	const childrenRef = useRef();
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		setOpen(visible);
	}, [visible]);

	useEffect(() => {
		if (childrenRef.current) setAnchorEl(childrenRef.current);
	}, [childrenRef]);

	const handleClose = () => {
		setOpen(false);
		setVisible(false);
	};

	return (
		<>
			<div ref={childrenRef}>{children}</div>
			<PopoverMui
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={anchorOrigin}
				transformOrigin={transformOrigin}
			>
				{content}
			</PopoverMui>
		</>
	);
};

export default Popover;

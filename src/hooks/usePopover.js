import { useId, useState } from 'react';

const usePopover = () => {
	const popoverId = useId();
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? popoverId : undefined;

	return { id, anchorEl, open, handleClick, handleClose };
};

export default usePopover;

import { IconButton, Modal } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { XMarkIcon } from '../../components/Icons';
import Login from '../../features/auth/components/Login';
import { setIsCallLogin } from '../../redux/slices/authSlice';

const LoginModal = () => {
	const isCallLogin = useSelector((state) => state.auth.isCallLogin);
	const dispatch = useDispatch();
	const [openModal, setOpenModal] = useState(false);
	useEffect(() => {
		setOpenModal(isCallLogin);
	}, [isCallLogin]);

	const handleClose = () => {
		setOpenModal(false);
		dispatch(setIsCallLogin(false));
	};
	return (
		<Modal open={openModal} onClose={handleClose}>
			<div className="position-center absolute">
				<Login />
				<div className="absolute right-4 top-4">
					<IconButton onClick={handleClose} className="h-10 w-10">
						<XMarkIcon />
					</IconButton>
				</div>
			</div>
		</Modal>
	);
};

export default LoginModal;

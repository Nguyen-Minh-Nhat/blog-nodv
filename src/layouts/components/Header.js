import { Button, Modal } from '@mui/material';
import { useState } from 'react';
import Logo from './Logo';

const Header = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div className="flex h-16 items-center justify-between border-b px-16">
			<div className="flex items-center justify-center gap-2">
				<div className="w-10">
					<Logo />
				</div>
				<span className="mb-2 text-xl font-bold text-[#3c483d]">NOVD</span>
			</div>

			<div>
				<Button
					onClick={() => setOpenModal(true)}
					className="h-10 rounded-full bg-black px-5 normal-case text-white"
				>
					Get Started
				</Button>
			</div>
			<Modal open={openModal} onClose={() => setOpenModal(false)}>
				<div className="position-center absolute h-96 w-96 bg-white">
					<span>Hello</span>
				</div>
			</Modal>
		</div>
	);
};

export default Header;

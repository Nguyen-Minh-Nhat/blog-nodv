import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import UserAction from './UserAction';

const SideBarLeft = () => {
	return (
		<div className="flex min-h-screen w-20 flex-col justify-between border-r">
			<div className="mt-6 flex h-12 items-center justify-center px-4 font-bold">
				<Logo />
			</div>
			<Navbar />
			{<UserAction />}
		</div>
	);
};

export default SideBarLeft;

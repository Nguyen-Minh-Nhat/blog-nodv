import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import UserAction from './UserAction';

const SideBarLeft = () => {
	return (
		<div className="flex w-20 flex-col justify-between border-r">
			<Logo />
			<Navbar />
			<UserAction />
		</div>
	);
};

export default SideBarLeft;

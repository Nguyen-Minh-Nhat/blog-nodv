import { Outlet } from 'react-router-dom';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';

const DefaultLayout = () => {
	return (
		<div className="flex h-screen w-screen">
			<SidebarLeft />
			<div className="flex-1">
				<Outlet />
			</div>
			<SidebarRight />
		</div>
	);
};

export default DefaultLayout;

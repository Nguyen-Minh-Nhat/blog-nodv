import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';

const DefaultLayout = ({ children }) => {
	return (
		<div className="flex h-screen w-screen">
			<SidebarLeft />
			<div className="flex-1">{children}</div>
			<SidebarRight />
		</div>
	);
};

export default DefaultLayout;

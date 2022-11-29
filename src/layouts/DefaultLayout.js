import { useSelector } from 'react-redux';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';

const DefaultLayout = ({ children }) => {
	const isLogin = useSelector((state) => !!state.user.data.accessToken);
	return (
		<div className="flex h-screen w-screen">
			{isLogin && <SidebarLeft />}
			<div className="flex-1">{children}</div>
			<SidebarRight />
		</div>
	);
};

export default DefaultLayout;

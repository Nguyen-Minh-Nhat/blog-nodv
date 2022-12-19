import { useSelector } from 'react-redux';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import StickyBox from 'react-sticky-box';

const DefaultLayout = ({ children }) => {
	const { isLogin } = useSelector((state) => state.user.data);
	return (
		<div className="flex h-full items-start">
			{isLogin && (
				<StickyBox className="hidden h-full sm:block">
					<SidebarLeft />
				</StickyBox>
			)}
			<div className="flex-1 sm:w-full">{children}</div>
			<StickyBox className="hidden lg:block">
				<SidebarRight />
			</StickyBox>
		</div>
	);
};

export default DefaultLayout;

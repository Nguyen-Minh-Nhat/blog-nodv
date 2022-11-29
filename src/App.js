import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthInfo } from './api/authApi';
import LoginModal from './pages/auth/LoginModal';
import { setUser } from './redux/slices/userSlice';
import AppRoutes from './routes/AppRoutes';

const App = () => {
	const isLogin = useSelector((state) => !!state.user.data.accessToken);
	const dispatch = useDispatch();
	useQuery('user', getAuthInfo, {
		enabled: isLogin,
		onSuccess: (data) => {
			dispatch(setUser(data));
		},
	});

	return (
		<div className="h-screen w-screen overflow-hidden">
			<LoginModal />
			{/* <SocketClient /> */}
			<AppRoutes />
		</div>
	);
};

export default App;

{
	/* <Routes>
	{routesWithComponents.map((route) => {
		let LayoutComponent = DefaultLayout;
		if (route.path === routes.home && !isLogin) LayoutComponent = HeaderOnly;
		return (
			<Route
				key={route.path}
				path={route.path}
				element={
					<LayoutComponent>
						<SuspenseProgress>{<route.component />}</SuspenseProgress>
					</LayoutComponent>
				}
			>
				{route?.children &&
					route.children.map((child) => {
						const Component = child.component;
						return (
							<Route
								key={child.path}
								path={child.path}
								element={<Component />}
							/>
						);
					})}
			</Route>
		);
	})}
	<Route path={'/oauth2/redirect'} element={<RedirectLogin />} />
	<Route path={'/profile/:email'} element={<RedirectLogin />} />
</Routes>; */
}

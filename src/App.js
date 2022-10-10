import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import HeaderOnly from './layouts/HeaderOnly';
import routes, { routesWithComponents } from './routes/route-paths';
import SocketClient from './web-socket/SocketClient';

const App = () => {
	const isLoggedIn = true;
	return (
		<>
			<SocketClient />
			<Routes>
				<Route path="/">
					{routesWithComponents.map((route) => {
						let LayoutComponent = DefaultLayout;
						if (route.path === routes.home && !isLoggedIn)
							LayoutComponent = HeaderOnly;
						return (
							<Route
								key={route.path}
								path={route.path}
								element={
									<LayoutComponent>{<route.component />}</LayoutComponent>
								}
							/>
						);
					})}
				</Route>
			</Routes>
		</>
	);
};

export default App;

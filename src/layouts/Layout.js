import { useState, useEffect, useMemo, Fragment } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { routeConfig } from '../routes/AppRoutes';
import DefaultLayout from './DefaultLayout';
import HeaderOnlyLayout from './HeaderOnly';

export const layouts = {
	DEFAULT: 'DEFAULT',
	HEADER_ONLY: 'HEADER_ONLY',
	NONE: 'NONE',
};

const Layout = ({ children }) => {
	const [layout, setLayout] = useState(layouts.DEFAULT);
	const { pathname } = useLocation();

	const renderLayout = useMemo(() => {
		let LayoutComponent;
		switch (layout) {
			case layouts.DEFAULT:
				LayoutComponent = DefaultLayout;
				break;
			case layouts.HEADER_ONLY:
				LayoutComponent = HeaderOnlyLayout;
				break;
			case layouts.NONE:
				LayoutComponent = Fragment;
				break;
			default:
				LayoutComponent = DefaultLayout;
		}
		return <LayoutComponent>{children}</LayoutComponent>;
	}, [children, layout]);

	useEffect(() => {
		routeConfig.forEach((item) => {
			const isMatch = matchPath(
				item.children ? `${item.path}/*` : item.path, // if has children, match all sub routes
				pathname
			);
			console.log(isMatch);
			if (isMatch) {
				console.log(isMatch);
				setLayout(item.layout);
			}
		});
	}, [pathname]);

	return <>{renderLayout}</>;
};

export default Layout;

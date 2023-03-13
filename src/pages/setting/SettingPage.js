import { Outlet, useNavigate } from 'react-router-dom';

import { MainContentLayout } from '../../layouts';
import React from 'react';
import Tab from '../../components/Tab';
import { tabItems } from './tab';

const SettingPage = () => {
	const navigate = useNavigate();
	return (
		<MainContentLayout>
			<MainContentLayout.Header>
				<MainContentLayout.Title>Settings</MainContentLayout.Title>
				<Tab
					tabItems={tabItems}
					onTabChange={(tabId) => {
						navigate(tabItems[tabId].path);
					}}
				/>
			</MainContentLayout.Header>
			<MainContentLayout.Body>
				<Outlet />
			</MainContentLayout.Body>
		</MainContentLayout>
	);
};

export default SettingPage;

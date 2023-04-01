import {
	Outlet,
	createSearchParams,
	useLocation,
	useNavigate,
	useSearchParams,
} from 'react-router-dom';

import { MainContentLayout } from '../../layouts';
import Tab from '../../components/Tab';
import { useEffect } from 'react';
import { useState } from 'react';

const filterConfigs = [
	{ id: '0', title: 'Stories', filter: 'posts' },
	{ id: '1', title: 'People', filter: 'users' },
	{ id: '2', title: 'Topics', filter: 'topics' },
];
const SearchPage = () => {
	// use the useSearchParams hook to get the keyword from the URL
	const { pathname } = useLocation();
	const [searchParams] = useSearchParams();
	const [currentTab, setCurrentTab] = useState(filterConfigs[0]);
	const navigate = useNavigate();
	const handleTabChange = (id) => {
		const filter = filterConfigs[id].filter;
		navigate({
			pathname: '/search/' + filter,
			search: createSearchParams({
				query: searchParams.get('query'),
			}).toString(),
		});
	};

	useEffect(() => {
		const filter = pathname.split('/')[2];
		const tab = filterConfigs.find((tab) => tab.filter === filter);
		setCurrentTab(tab);
	}, [pathname]);

	return (
		<MainContentLayout>
			<MainContentLayout.Header>
				<MainContentLayout.Title className="!font-normal">
					<span className="opacity-50 ">Result for </span>
					{searchParams.get('query')}
				</MainContentLayout.Title>
				<Tab
					tabItems={filterConfigs}
					onChange={handleTabChange}
					activeTab={currentTab}
				/>
			</MainContentLayout.Header>
			<MainContentLayout.Body>
				<Outlet />
			</MainContentLayout.Body>
		</MainContentLayout>
	);
};

export default SearchPage;

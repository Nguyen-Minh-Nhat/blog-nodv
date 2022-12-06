import {
	createSearchParams,
	Outlet,
	useNavigate,
	useSearchParams,
} from 'react-router-dom';
import PageWithTitle from '../../components/PageWithTitle';

const SearchPage = () => {
	// use the useSearchParams hook to get the keyword from the URL
	const filterConfigs = [
		{ id: '0', title: 'Stories', filter: 'posts' },
		{ id: '1', title: 'People', filter: 'users' },
		{ id: '2', title: 'Topics', filter: 'topics' },
	];
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	return (
		<PageWithTitle
			title={
				<div className="truncate">
					<span className="opacity-50">Result for</span>{' '}
					{searchParams.get('query')}
				</div>
			}
			tabItems={filterConfigs}
			onTabChange={(value) => {
				const filter = filterConfigs[value].filter;
				navigate({
					pathname: '/search/' + filter,
					search: createSearchParams({
						query: searchParams.get('query'),
					}).toString(),
				});
			}}
		>
			<Outlet />
		</PageWithTitle>
	);
};

export default SearchPage;

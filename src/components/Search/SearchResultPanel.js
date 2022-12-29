import { Link } from 'react-router-dom';
import { appRoutes } from '../../routes/AppRoutes';
import AccountQuickView from '../Account/AccountQuickView';
const SearchResultPanel = ({ searchResult = [] }) => {
	return (
		<div className="flex w-80 flex-col rounded-lg bg-white py-3 px-3">
			{searchResult.map((user) => (
				<Link
					to={`${appRoutes.PROFILE}/${user.email}`}
					key={user.id}
					className="mb-3 last:mb-0"
				>
					<AccountQuickView user={user} />
				</Link>
			))}
		</div>
	);
};

export default SearchResultPanel;

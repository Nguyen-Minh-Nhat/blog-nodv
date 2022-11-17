import AccountQuickView from '../Account/AccountQuickView';
const SearchResult = ({ searchResult = [] }) => {
	return (
		<div className="w-80 py-7 px-4">
			{searchResult.length > 0 &&
				searchResult.map((user) => (
					<AccountQuickView key={user.id} user={user} />
				))}
		</div>
	);
};

export default SearchResult;

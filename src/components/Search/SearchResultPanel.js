import AccountQuickView from '../Account/AccountQuickView';
const SearchResultPanel = ({ searchResult = [] }) => {
	return (
		<div className="w-80 rounded-lg bg-white py-3 px-3">
			{searchResult.map((user) => (
				<div key={user.id} className="mb-3 last:mb-0">
					<AccountQuickView user={user} />
				</div>
			))}
		</div>
	);
};

export default SearchResultPanel;

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useDebounce from '../../hooks/useDebounce';
import Popover from '../Popover';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
const TIMEOUT = 800;
const Search = () => {
	const [searchInput, setSearchInput] = useState('');
	const [searchResult, setSearchResult] = useState('');
	const debouncedValue = useDebounce(searchInput, TIMEOUT);
	const user = useSelector((state) => state.user.data.info);
	const [showResult, setShowResult] = useState(false);
	useEffect(() => {
		if (!debouncedValue.trim()) {
			setSearchResult([]);
			setShowResult(false);
			return;
		}
		setSearchResult([user]);
		setShowResult(true);
	}, [debouncedValue]);

	return (
		<Popover
			visible={showResult}
			fullWidth
			setVisible={setShowResult}
			content={<SearchResult searchResult={searchResult} />}
		>
			<SearchInput
				onChange={(e) => {
					setSearchInput(e.target.value);
				}}
			/>
		</Popover>
	);
};

export default Search;

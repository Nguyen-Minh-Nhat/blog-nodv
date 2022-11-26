import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { searchUser } from '../../api/userApi';
import useDebounce from '../../hooks/useDebounce';
import Popover from '../Popover';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
const TIMEOUT = 800;
const Search = () => {
	const [searchInput, setSearchInput] = useState('');
	const [searchResult, setSearchResult] = useState('');
	const debouncedValue = useDebounce(searchInput, TIMEOUT);
	const [showResult, setShowResult] = useState(false);

	const searchUserMutation = useMutation(searchUser, {
		onSuccess: (data) => {
			const users = data.data.content;
			setSearchResult(users);
			setShowResult(true);
		},
	});
	useEffect(() => {
		if (!debouncedValue.trim()) {
			setSearchResult([]);
			setShowResult(false);
			return;
		}
		searchUserMutation.mutate(debouncedValue);
		console.log(searchUserMutation.data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue]);

	return (
		<>
			<input type="text" onFocus={() => setShowResult(true)} />
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
					// onFocus={() => setShowResult(true)}
				/>
			</Popover>
		</>
	);
};

export default Search;

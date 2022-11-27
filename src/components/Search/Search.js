import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Popover } from 'react-tiny-popover';
import { searchUser } from '../../api/userApi';
import useDebounce from '../../hooks/useDebounce';
import ShadowWrapper from '../ShadowWrapper';

import SearchBar from './SearchBar';
import SearchResult from './SearchResultPanel';
const TIMEOUT = 800;
const Search = () => {
	const [searchInput, setSearchInput] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const debouncedValue = useDebounce(searchInput, TIMEOUT);

	const searchUserMutation = useMutation(searchUser, {
		onSuccess: (data) => {
			console.log(data);
			const searchResult = data?.data || [];
			setSearchResult(searchResult);
		},
	});

	useEffect(() => {
		if (searchResult.length <= 0) setShowResult(false);
		else setShowResult(true);
	}, [searchResult]);

	useEffect(() => {
		if (!debouncedValue.trim()) {
			setSearchResult([]);
			setShowResult(false);
			return;
		}
		searchUserMutation.mutate(debouncedValue);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue]);

	const handleTypingInput = (e) => {
		setSearchInput(e.target.value);
	};

	return (
		<>
			<Popover
				onClickOutside={() => setShowResult(false)}
				isOpen={showResult}
				positions={['bottom']}
				padding={10}
				content={
					<ShadowWrapper>
						<SearchResult searchResult={searchResult} />
					</ShadowWrapper>
				}
			>
				<div>
					<SearchBar
						onChange={handleTypingInput}
						onFocus={() => {
							if (searchResult.length > 0) setShowResult(true);
						}}
					/>
				</div>
			</Popover>
		</>
	);
};

export default Search;

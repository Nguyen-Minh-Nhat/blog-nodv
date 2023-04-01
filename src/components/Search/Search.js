import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { Popover } from 'react-tiny-popover';
import SearchBar from './SearchBar';
import SearchResult from './SearchResultPanel';
import ShadowWrapper from '../ShadowWrapper';
import { appRoutes } from '../../routes/AppRoutes';
import useDebounce from '../../hooks/useDebounce';
import { useSearchUser } from '../../features/user/hooks';

const TIMEOUT = 800;
const Search = () => {
	const [searchInput, setSearchInput] = useState('');

	const [showResult, setShowResult] = useState(false);
	const debouncedValue = useDebounce(searchInput, TIMEOUT);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [disableSearch, setDisableSearch] = useState(false);

	useEffect(() => {
		if (pathname.includes(appRoutes.SEARCH)) {
			setDisableSearch(true);
		} else {
			setDisableSearch(false);
		}
	}, [pathname]);

	// eslint-disable-next-line no-unused-vars
	const [_, setSearchParams] = useSearchParams();

	const { data: searchResult, isLoading, setQuery } = useSearchUser();

	useEffect(() => {
		if (searchResult.length <= 0) setShowResult(false);
		else setShowResult(true);
	}, [searchResult]);

	useEffect(() => {
		if (!debouncedValue.trim() || disableSearch) {
			setShowResult(false);
			return;
		}
		setQuery(debouncedValue);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue]);

	const handleTypingInput = (e) => {
		setSearchInput(e.target.value);
	};

	const handleEnter = (e) => {
		if (e.key === 'Enter' && searchInput.trim()) {
			if (!pathname.includes('search')) {
				navigate(appRoutes.SEARCH_STORIES + '?query=' + searchInput);
			} else setSearchParams({ query: searchInput });
		}
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
						loading={isLoading}
						onChange={handleTypingInput}
						onFocus={() => {
							if (searchResult.length > 0) setShowResult(true);
						}}
						onKeyPress={handleEnter}
					/>
				</div>
			</Popover>
		</>
	);
};

export default Search;

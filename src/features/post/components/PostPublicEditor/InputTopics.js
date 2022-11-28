import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import useDebounce from '../../../../hooks/useDebounce';
import googleSearch from '../../../../utils/googleSearch';

const InputTopic = ({ onChange, defaultValue = [] }) => {
	const [value, setValue] = useState(defaultValue);
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const debouncedValue = useDebounce(searchValue, 500);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!debouncedValue.trim()) {
			setSearchResult([]);
			return;
		}
		const getSearchValue = async () => {
			setLoading(true);
			const res = await googleSearch(debouncedValue);
			setSearchResult(res);
			setLoading(false);
		};
		getSearchValue();
	}, [debouncedValue]);

	return (
		<Autocomplete
			multiple
			value={value}
			onChange={(event, newValue, reason) => {
				if (reason === 'selectOption' && newValue.length >= 5) return;

				setValue([...newValue]);
				onChange([...newValue]);
			}}
			options={searchResult}
			isOptionEqualToValue={(option, value) => option === value}
			renderTags={(tagValue, getTagProps) =>
				tagValue.map((option, index) => (
					<Chip label={option} {...getTagProps({ index })} />
				))
			}
			limitTags={5}
			loading={loading}
			loadingText={'search...'}
			renderInput={(params) => (
				<TextField
					{...params}
					fullWidth
					label="Topics"
					placeholder="example: React"
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			)}
		/>
	);
};

export default InputTopic;

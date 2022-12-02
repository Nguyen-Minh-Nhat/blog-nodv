import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { searchTopics } from '../../../../api/topicApi';
import useDebounce from '../../../../hooks/useDebounce';

const InputTopic = ({ onChange, defaultValue = [] }) => {
	const [value, setValue] = useState(defaultValue);
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const debouncedValue = useDebounce(searchValue, 500);

	const searchMutation = useMutation(searchTopics, {
		onSuccess: (data) => {
			setSearchResult(data);
		},
	});

	useEffect(() => {
		if (!debouncedValue.trim()) {
			setSearchResult([]);
			return;
		}
		searchMutation.mutate(debouncedValue);
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
			getOptionLabel={(option) => option.name}
			isOptionEqualToValue={(option, value) => option.name === value.name}
			renderTags={(tagValue, getTagProps) =>
				tagValue.map((option, index) => (
					<Chip label={option.name} {...getTagProps({ index })} />
				))
			}
			limitTags={5}
			loading={searchMutation.isLoading}
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

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

	const [error, setError] = useState(null);

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue]);

	const checkDuplicateTopic = (topic) => {
		return value.some(
			(item) => item.name.toLowerCase() === topic.name.toLowerCase() // case insensitive
		);
	};

	const handleEnter = (e) => {
		if (e.key === 'Enter') {
			const newTopic = {
				name: e.target.value,
			};
			// if the topic is not already in the list, add it
			if (!checkDuplicateTopic(newTopic) && value.length < 5) {
				setValue([...value, newTopic]);
				onChange([...value, newTopic]);
				setError(null);
			} else if (value.length >= 5) {
				setError('You can only add up to 5 topics');
			} else {
				setError('This topic is already added');
			}
		}
	};

	return (
		<Autocomplete
			open={!!!error}
			multiple
			value={value}
			onChange={(event, newValue, reason) => {
				if (reason === 'selectOption' && newValue.length > 5) return;
				if (reason === 'removeOption' && newValue.length < 5) setError(null);
				setValue([...newValue]);
				onChange([...newValue]);
			}}
			options={searchResult}
			getOptionLabel={(option) => option.name}
			isOptionEqualToValue={(option, value) => option.name === value.name}
			getOptionDisabled={(option) => false}
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
					onChange={(e) => {
						setError(null);
						setSearchValue(e.target.value);
					}}
					onKeyDown={handleEnter}
					helperText={error}
					error={!!error}
				/>
			)}
		/>
	);
};

export default InputTopic;

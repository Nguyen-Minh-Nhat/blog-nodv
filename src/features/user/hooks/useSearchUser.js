import { searchUser } from '../../../api/userApi';
import { useQuery } from 'react-query';
import { useState } from 'react';

export const useSearchUser = () => {
	const [query, setQuery] = useState('');
	const { data, error, isLoading } = useQuery(
		['search-user', query],
		() => searchUser(query, 0, 5),
		{
			enabled: query.length > 0,
			staleTime: 1000 * 60 * 60 * 24,
		},
	);
	return { data: data?.content || [], error, isLoading, setQuery };
};

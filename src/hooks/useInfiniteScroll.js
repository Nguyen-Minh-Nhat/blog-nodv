import { useState } from 'react';
import { useMutation } from 'react-query';

const useInfiniteScroll = (apiCallBack, onSuccess = () => {}, limit = 10) => {
	const [isHasMore, setIsHasMore] = useState(true);
	const [page, setPage] = useState(0);
	const fetchMoreMutation = useMutation(apiCallBack, {
		onSuccess: (data) => {
			onSuccess(data);
			setPage(page + 1);
			if (data.length < limit) {
				setIsHasMore(false);
			}
		},
	});
	const handleFetchMore = () => {
		fetchMoreMutation.mutate(page + 1, limit);
	};
	return {
		isHasMore,
		page,
		handleFetchMore,
	};
};

export default useInfiniteScroll;

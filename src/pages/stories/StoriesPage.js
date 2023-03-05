import { useQuery, useQueryClient } from 'react-query';

import PageWithTitle from '../../components/PageWithTitle';
import { PostList } from '../../features/post';
import { PostListLoading } from '../../features/post/components';
import React from 'react';
import { getOwnedPosts } from '../../api/postApi';

const filterType = {
	ALL: null,
	PUBLISHED: 'true',
	UNPUBLISHED: 'false',
};

const filterConfigs = [
	{ id: '0', title: 'All', filter: filterType.ALL },
	{ id: '1', title: 'Published', filter: filterType.PUBLISHED },
	{ id: '2', title: 'Unpublished', filter: filterType.UNPUBLISHED },
];

const StoriesPage = () => {
	const [filter, setFilter] = React.useState(filterType.ALL);
	const queryClient = useQueryClient();
	const { isLoading } = useQuery(['stories', filter], () =>
		getOwnedPosts(filter),
	);
	const data = queryClient.getQueryData(['stories', filter]);
	return (
		<PageWithTitle
			title={'Your Stories'}
			onTabChange={(id) => {
				setFilter(filterConfigs[id].filter);
			}}
			tabItems={filterConfigs}
		>
			<div>
				{!isLoading && (
					<PostList postList={data} storeKey={['stories', filter]} />
				)}
				{isLoading && <PostListLoading />}
			</div>
		</PageWithTitle>
	);
};

export default StoriesPage;

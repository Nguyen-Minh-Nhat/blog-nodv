import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getOwnedPosts } from '../../api/postApi';
import PageWithTitle from '../../components/PageWithTitle';
import { PostList } from '../../features/post';

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
	const { data } = useQuery(['posts', filter], () => getOwnedPosts(filter));
	// console.log(queryClient.getQueryData('posts'));
	return (
		<PageWithTitle
			title={'Your Stories'}
			onTabChange={(id) => {
				setFilter(filterConfigs[id].filter);
			}}
			tabItems={filterConfigs}
		>
			<div>
				<PostList postList={data} storeKey={['posts', filter]} />
			</div>
		</PageWithTitle>
	);
};

export default StoriesPage;

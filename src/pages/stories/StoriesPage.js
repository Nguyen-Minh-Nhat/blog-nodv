import React, { useState } from 'react';

import PageWithTitle from '../../components/PageWithTitle';
import { PostListFetch } from '../../features/post/components';
import { getOwnedPosts } from '../../api/postApi';

const filterType = {
	ALL: null,
	PUBLISHED: true,
	UNPUBLISHED: false,
};

const filterConfigs = [
	{ id: '0', title: 'All', filter: filterType.ALL },
	{ id: '1', title: 'Published', filter: filterType.PUBLISHED },
	{ id: '2', title: 'Unpublished', filter: filterType.UNPUBLISHED },
];

const StoriesPage = () => {
	const [filter, setFilter] = useState();
	const handleTabChange = (id) => {
		const filter = {};
		switch (id) {
			case '1':
				filter.isPublish = true;
				break;
			case '2':
				filter.isPublish = false;
				break;
			default:
				break;
		}
		setFilter(filter);
	};
	return (
		<PageWithTitle
			title={'Your Stories'}
			onTabChange={handleTabChange}
			tabItems={filterConfigs}
		>
			<PostListFetch
				queryKey="stories"
				filter={filter}
				queryFn={getOwnedPosts}
			/>
		</PageWithTitle>
	);
};

export default StoriesPage;

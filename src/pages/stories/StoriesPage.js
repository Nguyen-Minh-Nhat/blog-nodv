import React from 'react';
import { useQuery } from 'react-query';
import { getOwnedPosts } from '../../api/postApi';
import PageWithTitle from '../../components/PageWithTitle';
import { PostList } from '../../features/post';

const StoriesPage = () => {
	const { data } = useQuery('stories', () => getOwnedPosts());
	return (
		<PageWithTitle
			title={'Your Stories'}
			onTabChange={(id) => {
				console.log(id);
			}}
			tabItems={[
				{ id: '1', title: 'Drafts' },
				{ id: '2', title: 'Published' },
				{ id: '3', title: 'Responses' },
			]}
		>
			<div>
				<PostList postList={data} />
			</div>
		</PageWithTitle>
	);
};

export default StoriesPage;

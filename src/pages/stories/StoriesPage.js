import React from 'react';
import PageWithTitle from '../../components/PageWithTitle';

const StoriesPage = () => {
	return (
		<PageWithTitle
			title={'Your Stories'}
			tabItems={[
				{ id: '1', title: 'Drafts' },
				{ id: '2', title: 'Published' },
				{ id: '3', title: 'Responses' },
			]}
		>
			<div>StoriesPage</div>
		</PageWithTitle>
	);
};

export default StoriesPage;

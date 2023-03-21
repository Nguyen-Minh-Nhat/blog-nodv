import { PostListFetch } from '../../../features/post/components';
import React from 'react';
import { getBookmark } from '../../../api/bookmarkApi';

const ListTab = () => {
	return (
		<PostListFetch
			queryKey="bookmark"
			queryFn={getBookmark}
			isDeleteOnBookmark
		/>
	);
};

export default ListTab;

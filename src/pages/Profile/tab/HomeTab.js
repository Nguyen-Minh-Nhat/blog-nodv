import { PostListFetch } from '../../../features/post/components';
import React from 'react';
import { getPosts } from '../../../api/postApi';
import { useSelector } from 'react-redux';

const HomeTab = () => {
	const profile = useSelector((state) => state?.profile?.data);

	return (
		<PostListFetch
			queryKey="profileHome"
			queryFn={getPosts}
			filter={{
				user: profile.id,
			}}
		/>
	);
};

export default HomeTab;

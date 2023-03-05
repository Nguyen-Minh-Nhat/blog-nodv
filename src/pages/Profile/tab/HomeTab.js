import { getOwnedPosts, getPostsByUserId } from '../../../api/postApi';

import { PostList } from '../../../features/post';
import { PostListLoading } from '../../../features/post/components';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const HomeTab = () => {
	const ownProfile = useOutletContext();
	const profile = useSelector((state) => state?.profile?.data);
	const storeKey = ['profileHome', profile.id];
	const {
		data: posts,
		isSuccess,
		isLoading,
	} = useQuery(
		storeKey,
		() => (ownProfile ? getOwnedPosts() : getPostsByUserId(profile.id)),
		{
			enabled: !!profile.id,
		},
	);

	return (
		<div className="flex justify-center">
			<div className="max-w-[700px] basis-[700px]">
				{isSuccess && <PostList postList={posts} storeKey={storeKey} />}
				{isLoading && <PostListLoading />}
			</div>
		</div>
	);
};

export default HomeTab;

import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { getOwnedPosts, getPostsByUserId } from '../../../api/postApi';
import { PostList } from '../../../features/post';

const HomeTab = () => {
	const ownProfile = useOutletContext();
	const profile = useSelector((state) => state?.profile?.data);
	const storeKey = ['profileHome', profile.id];
	const { data: posts, isSuccess } = useQuery(
		storeKey,
		() => (ownProfile ? getOwnedPosts() : getPostsByUserId(profile.id)),
		{
			enabled: !!profile.id,
		}
	);

	return (
		<div className="flex justify-center">
			<div className="max-w-[700px] basis-[700px]">
				{isSuccess && <PostList postList={posts} storeKey={storeKey} />}
			</div>
		</div>
	);
};

export default HomeTab;

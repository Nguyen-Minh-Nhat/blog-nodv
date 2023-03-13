import React, { useMemo, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';

import InfiniteScroll from 'react-infinite-scroll-component';
import PostList from '../PostList';
import { PostListLoading } from '../PostListLoading';
import { getListPostHided } from '../../../../api/postApi';

export const PostListFetch = ({ filter = {}, queryKey = 'posts', queryFn }) => {
	const accurateFilter = useMemo(() => {
		return Object.keys(filter).reduce((acc, key) => {
			if (filter[key] !== null) {
				acc[key] = filter[key];
			}
			return acc;
		}, {});
	}, [filter]);

	const storeKey = [queryKey, accurateFilter];

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isLoading,
		isSuccess,
		isFetching,
	} = useInfiniteQuery(
		storeKey,
		({ pageParam }) => queryFn({ ...accurateFilter, page: pageParam }),
		{
			getNextPageParam: (lastPage) => {
				const { last, number } = lastPage;
				return last ? undefined : number + 1;
			},
		},
	);

	const posts = useMemo(() => {
		const allPosts = [];
		data?.pages.forEach((page) => {
			return page.content.forEach((post) =>
				allPosts.push({ ...post, page: page.number }),
			);
		});
		return allPosts;
	}, [data]);
	// reset page and isHasMore when tab change
	const [hidePost, setHidePost] = useState([]);
	useQuery('hidePost', () => getListPostHided(), {
		onSuccess: (data) => {
			setHidePost(data);
		},
		onError: (err) => {
			console.log('err', err);
		},
	});

	return (
		<InfiniteScroll
			dataLength={posts?.length || 0}
			next={fetchNextPage}
			hasMore={hasNextPage}
			endMessage={posts?.length > 0 ? <EndMessage /> : <></>}
		>
			{isSuccess && (
				<PostList
					postList={posts}
					storeKey={storeKey}
					postIdsHide={hidePost}
				/>
			)}
			{(isLoading || isFetching) && <PostListLoading />}
		</InfiniteScroll>
	);
};

const EndMessage = () => (
	<div className="py-10">
		<p className="text-center font-thin">Yay! You have seen it all</p>
	</div>
);

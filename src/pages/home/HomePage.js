import { getListPostHided, getPosts } from '../../api/postApi';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import Header from './components/Header';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PostList } from '../../features/post';
import { PostListLoading } from '../../features/post/components';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LIMIT = 5;
const HomePage = () => {
	const { tab } = useParams(); //get tab from url
	const storeKey = ['posts', tab]; //key for react-query

	const { data: posts, isLoading } = useQuery(
		storeKey,
		() => getPosts({ topic: tab, limit: LIMIT }),
		{
			refetchOnWindowFocus: false,
		},
	); //get posts from api by tab

	const queryClient = useQueryClient();

	const postIdsBookmark = useSelector((state) => state.bookmark.postIds);

	const {
		isHasMore,
		handleFetchMore,
		setIsHasMore,
		setPage,
		isLoading: isLoadingMore,
	} = useInfiniteScroll(
		getPosts,
		(data) => {
			queryClient.setQueryData(storeKey, (oldData) => {
				return [...oldData, ...data];
			});
		},
		LIMIT,
	); // get more posts when scroll to bottom

	useEffect(() => {
		setPage(0);
		setIsHasMore(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tab]); // reset page and isHasMore when tab change
	const [hidePost, setHidePost] = useState([]);
	useQuery('hidePost', () => getListPostHided(), {
		onSuccess: (data) => {
			setHidePost(data);
		},
		onError: (err) => {
			console.log('err re', err);
		},
	});
	return (
		<>
			<InfiniteScroll
				dataLength={posts?.length || 0}
				next={() => handleFetchMore({ topic: tab })}
				hasMore={isHasMore}
				endMessage={<EndMessage />}
			>
				<div className="sticky top-0 z-10 bg-white pt-6">
					<Header />
				</div>
				<Main>
					{!isLoading && (
						<PostList
							postList={posts}
							storeKey={storeKey}
							postIdsBookmark={postIdsBookmark}
							postIdsHide={hidePost}
						/>
					)}
					{(isLoading || isLoadingMore) && <PostListLoading />}
				</Main>
			</InfiniteScroll>
		</>
	);
};

const Main = ({ children }) => {
	return (
		<div className="flex justify-center">
			<div className="mx-4 max-w-2xl basis-[672px] pt-12">{children}</div>
		</div>
	);
};

const EndMessage = () => (
	<div className="py-10">
		<p className="text-center font-thin">Yay! You have seen it all</p>
	</div>
);

export default HomePage;

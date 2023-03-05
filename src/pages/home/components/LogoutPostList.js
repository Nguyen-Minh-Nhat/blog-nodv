import { useQuery, useQueryClient } from 'react-query';

import InfiniteScroll from 'react-infinite-scroll-component';
import { PostList } from '../../../features/post';
import { PostListLoading } from '../../../features/post/components';
import { getPosts } from '../../../api/postApi';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';

const LIMIT = 5;
const LogoutPostList = () => {
	const queryClient = useQueryClient();
	const storeKey = ['posts-home']; //key for react-query
	const {
		isHasMore,
		handleFetchMore,
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

	const {
		data: posts,
		isSuccess,
		isLoading,
	} = useQuery(storeKey, () => getPosts({ limit: LIMIT }), {
		refetchOnWindowFocus: false,
	});

	return (
		<InfiniteScroll
			dataLength={posts?.length || 0}
			next={handleFetchMore}
			hasMore={isHasMore}
			endMessage={
				<div className="py-10">
					<p className="text-center font-thin">
						Yay! You have seen it all
					</p>
				</div>
			}
		>
			<div className="max-w-2xl flex-1 pt-8">
				{isSuccess && <PostList postList={posts} />}
				{(isLoading || isLoadingMore) && <PostListLoading />}
			</div>
		</InfiniteScroll>
	);
};

export default LogoutPostList;

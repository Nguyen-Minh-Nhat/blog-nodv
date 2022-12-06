import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPosts } from '../../api/postApi';
import { PostList } from '../../features/post';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Header from './components/Header';

const LIMIT = 5;
const HomePage = () => {
	const { tab } = useParams(); //get tab from url
	const storeKey = ['posts', tab]; //key for react-query

	const { data: posts } = useQuery(
		storeKey,
		() => getPosts({ topic: tab, limit: LIMIT }),
		{
			refetchOnWindowFocus: false,
		}
	); //get posts from api by tab

	const queryClient = useQueryClient();

	const { isHasMore, handleFetchMore, setIsHasMore, setPage } =
		useInfiniteScroll(
			getPosts,
			(data) => {
				queryClient.setQueryData(storeKey, (oldData) => {
					return [...oldData, ...data];
				});
			},
			LIMIT
		); // get more posts when scroll to bottom

	useEffect(() => {
		setPage(0);
		setIsHasMore(true);
	}, [tab]); // reset page and isHasMore when tab change

	return (
		<InfiniteScroll
			dataLength={posts?.length || 0}
			next={() => handleFetchMore({ topic: tab })}
			hasMore={isHasMore}
			endMessage={
				<div className="py-10">
					<p className="text-center font-thin">Yay! You have seen it all</p>
				</div>
			}
		>
			<div className="sticky top-0 z-10 bg-white pt-6">
				<Header />
			</div>
			<Main>
				<PostList postList={posts} storeKey={storeKey} />
			</Main>
		</InfiniteScroll>
	);
};

const Main = ({ children }) => {
	return (
		<div className="flex justify-center">
			<div className="mx-4 max-w-[700px] basis-[700px] pt-12">{children}</div>
		</div>
	);
};

export default HomePage;

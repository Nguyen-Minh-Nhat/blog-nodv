import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { getBookmarkByUserId } from '../../api/bookmarkApi';
import { getPosts } from '../../api/postApi';
import { PostList } from '../../features/post';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { setBookmark } from '../../redux/slices/bookmarkSlice';
import Header from './components/Header';

const LIMIT = 10;
const HomePage = () => {
	const dispatch = useDispatch();
	const { data: posts } = useQuery('posts', () => getPosts(), {
		refetchOnWindowFocus: false,
	});
	const queryClient = useQueryClient();

	const { isHasMore, handleFetchMore } = useInfiniteScroll(
		getPosts,
		(data) => {
			queryClient.setQueryData('posts', (oldData) => {
				return [...oldData, ...data];
			});
		},
		LIMIT
	);

	const postIdsBookmark = useSelector((state) => state.bookmark.postIds);

	useQuery('bookmark', getBookmarkByUserId, {
		onSuccess: (data) => {
			dispatch(setBookmark(data));
		},
	});

	return (
		<InfiniteScroll
			dataLength={posts?.length || 0}
			next={handleFetchMore}
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
				<PostList postList={posts} postIdsBookmark={postIdsBookmark} />
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

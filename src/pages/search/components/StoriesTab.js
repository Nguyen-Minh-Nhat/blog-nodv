import { PostList } from '../../../features/post';
import { PostListLoading } from '../../../features/post/components';
import { getPosts } from '../../../api/postApi';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

const StoriesTab = () => {
	const [searchParams] = useSearchParams();
	const storeKey = ['posts', searchParams.get('query')];
	const {
		data: posts,
		isSuccess,
		isLoading,
	} = useQuery(storeKey, () =>
		getPosts({ page: 0, limit: 10, title: searchParams.get('query') }),
	);

	return (
		<div>
			{isSuccess && <PostList postList={posts} storeKey={storeKey} />}
			{isLoading && <PostListLoading />}
		</div>
	);
};

export default StoriesTab;

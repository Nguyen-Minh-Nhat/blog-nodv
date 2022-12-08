import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getPosts } from '../../../api/postApi';
import { PostList } from '../../../features/post';

const StoriesTab = () => {
	const [searchParams] = useSearchParams();
	const storeKey = ['posts', searchParams.get('query')];
	const { data: posts, isSuccess } = useQuery(storeKey, () =>
		getPosts({ page: 0, limit: 10, title: searchParams.get('query') })
	);

	return (
		<div>{isSuccess && <PostList postList={posts} storeKey={storeKey} />}</div>
	);
};

export default StoriesTab;

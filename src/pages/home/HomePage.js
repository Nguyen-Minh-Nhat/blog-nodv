import { getPosts, getPostsByFollowing } from '../../api/postApi';

import Header from './components/Header';
import { MainContentLayout } from '../../layouts';
import { PostListFetch } from '../../features/post/components';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
	const [searchParams] = useSearchParams();
	const { filter, queryFn, queryKey } = useMemo(() => {
		const feed = searchParams.get('feed');
		if (feed === 'following') {
			return {
				queryKey: 'PostsByFollowing',
				filter: {},
				queryFn: getPostsByFollowing,
			};
		}

		const topic = searchParams.get('topic');
		if (topic) {
			return {
				queryKey: 'PostsByTopic',
				filter: { topic },
				queryFn: getPosts,
			};
		}
		return {
			queryKey: 'Posts',
			filter: {},
			queryFn: getPosts,
		};
	}, [searchParams]);
	return (
		<MainContentLayout>
			<MainContentLayout.Header className="sticky top-0 z-10">
				<Header />
			</MainContentLayout.Header>
			<MainContentLayout.Body>
				<PostListFetch
					filter={filter}
					queryKey={queryKey}
					queryFn={queryFn}
				/>
			</MainContentLayout.Body>
		</MainContentLayout>
	);
};

export default HomePage;

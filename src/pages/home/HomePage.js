import { useQuery } from 'react-query';
import { getPosts } from '../../api/postApi';
import { PostList } from '../../features/post';
import Header from './components/Header';

const HomePage = () => {
	const { data: posts } = useQuery('posts', getPosts);
	console.log(posts);
	return (
		<div className="h-screen overflow-x-auto ">
			<div className="sticky top-0 z-10 bg-white pt-6">
				<Header />
			</div>
			<Main>
				<PostList postList={posts} />
			</Main>
		</div>
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

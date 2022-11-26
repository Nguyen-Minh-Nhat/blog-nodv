import { useQuery } from 'react-query';
import { getPosts } from '../../../api/postApi';
import { PostList } from '../../../features/post';

const Main = () => {
	const { data = [] } = useQuery('posts', getPosts, {}, []);

	return (
		<div className="flex justify-center">
			<div className="mx-4 max-w-[700px] basis-[700px] pt-12">
				<PostList postList={data.data} />
			</div>
		</div>
	);
};

export default Main;

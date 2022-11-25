import { useQueries, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../api/postApi';
import Header from './components/Header';
import Main from './components/Main';

const PostPage = () => {
	const { id } = useParams();

	const { data: post } = useQuery('post', () => getPostById(id));
	console.log(post?.data);

	return (
		<div className="flex h-screen flex-col">
			<Header />
			{post?.data && <Main post={post.data} />}
		</div>
	);
};

export default PostPage;

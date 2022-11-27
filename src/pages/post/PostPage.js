import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../api/postApi';
import { setPost } from '../../redux/slices/postSlice';
import Header from './components/Header';
import Main from './components/Main';
import Post from '../../features/post/components/Post';

const PostPage = () => {
	const { id } = useParams();
	const post = useSelector((state) => state.post.data);
	const dispatch = useDispatch();

	useQuery(['post', id], () => getPostById(id), {
		onSuccess: (data) => {
			dispatch(setPost(data.data));
		},
		onError: (error) => {
			if (error.response.status === 404) {
				window.location.href = '/404';
			}
		},
	});

	return (
		<div className="flex h-screen flex-col">
			<Header />
			<Main>{post && <Post post={post} />}</Main>
		</div>
	);
};

export default PostPage;

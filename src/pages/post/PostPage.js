import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import {
	deletePost,
	getPostById,
	publishPost,
	unpublishPost,
} from '../../api/postApi';
import Header from './components/Header';
import Main from './components/Main';
import Post from '../../features/post/components/Post';
import { toast } from 'react-toastify';

const PostPage = () => {
	const { id } = useParams();

	const queryClient = useQueryClient();

	const post = queryClient.getQueryData(['post', id]);

	useQuery(['post', id], () => getPostById(id), {
		onSuccess: (data) => {
			queryClient.setQueriesData(['post', id], data);
		},
		onError: (error) => {
			if (error.response.status === 404) {
				window.location.href = '/404';
			}
		},
	});

	const deletePostMutation = useMutation(deletePost, {
		onSuccess: () => {
			toast.success('Post deleted successfully');
		},
	});

	const publishPostMutation = useMutation(publishPost, {
		onSuccess: (data) => {
			queryClient.setQueryData(['post', id], data);
			toast.success('Post was published');
		},
	});

	const unpublishPostMutation = useMutation(unpublishPost, {
		onSuccess: (data) => {
			queryClient.setQueryData(['post', id], data);
			toast.success('Post was unpublished ');
		},
	});

	return (
		<div className="flex h-screen flex-col">
			<Header />
			<Main>
				{post && (
					<Post
						post={post}
						onPublish={publishPostMutation.mutate}
						onDelete={deletePostMutation.mutate}
						onUnpublish={unpublishPostMutation.mutate}
					/>
				)}
			</Main>
		</div>
	);
};

export default PostPage;

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import {
	deletePost,
	getPostById,
	likePost,
	publishPost,
	unLikePost,
	unpublishPost,
} from '../../api/postApi';
import Header from './components/Header';
import Main from './components/Main';
import Post from '../../features/post/components/Post';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createNotification } from '../../api/notificationApi';

const PostPage = () => {
	const { id } = useParams();

	const socket = useSelector((state) => state.socket.data);

	const queryClient = useQueryClient();

	const post = queryClient.getQueryData(['post', id]);

	useQuery(['post', id], () => getPostById(id), {
		onError: (error) => {
			if (error.response.status === 404) {
				window.location.href = '/404';
			}
		},
	});
	const generationNotificationbyData = (data, TYPE) => {
		return {
			link: `/posts/${data.id}`,
			receiverId: `${data.userId}`,
			type: TYPE,
		};
	};

	const updateLocalPost = (updatedPost) => {
		queryClient.setQueryData(['post', id], (oldPost) => {
			return {
				...oldPost,
				...updatedPost,
			};
		});
	};

	const deletePostMutation = useMutation(deletePost, {
		onSuccess: () => {
			toast.success('Post deleted successfully');
		},
	});

	const publishPostMutation = useMutation(publishPost, {
		onSuccess: (data) => {
			updateLocalPost(data);
			toast.success('Post was published');
		},
	});

	const unpublishPostMutation = useMutation(unpublishPost, {
		onSuccess: (data) => {
			updateLocalPost(data);
			toast.success('Post was unpublished');
		},
	});

	const likePostMutation = useMutation(likePost, {
		onSuccess: (data) => {
			queryClient.setQueryData(['post', post.id], data);
			createNotificationLikePostMutation.mutate(
				generationNotificationbyData(data, 'LIKE')
			);
		},
	});

	const unlikePostMutation = useMutation(unLikePost, {
		onSuccess: (data) => {
			queryClient.setQueryData(['post', post.id], data);
		},
	});
	const createNotificationLikePostMutation = useMutation(createNotification, {
		onSuccess: (data) => {
			console.log(data.data);
		},
	});

	const handleReceiveLikePostSocket = (payload) => {
		console.log(payload);
		const { userLikeIds } = JSON.parse(payload.body);
		updateLocalPost({ userLikeIds: userLikeIds });
	};

	useEffect(() => {
		const topic = `/topic/posts/${post?.id}/like`;
		if (socket) {
			socket.subscribe(topic, handleReceiveLikePostSocket, { id: topic });
		}
		return () => {
			if (socket) {
				console.log('unsubscribing');
				socket.unsubscribe(topic);
			}
		};
	}, [post?.id, socket]);

	return (
		<div className="flex flex-col">
			<Header />
			<Main>
				{post && (
					<Post
						post={post}
						onPublish={publishPostMutation.mutate}
						onDelete={deletePostMutation.mutate}
						onUnpublish={unpublishPostMutation.mutate}
						onLike={likePostMutation.mutate}
						onUnlike={unlikePostMutation.mutate}
					/>
				)}
			</Main>
		</div>
	);
};

export default PostPage;

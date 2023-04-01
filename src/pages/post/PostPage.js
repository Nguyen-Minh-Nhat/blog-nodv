import { getPostById, likePost, unLikePost } from '../../api/postApi';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import Main from './components/Main';
import { NotificationType } from '../../config/dataType';
import { Post } from '../../features/post/components';
import { PostProvider } from '../../features/post/context/PostContext';
import { callApiCreateNotification } from '../../utils/generationNotification';
import { createNotification } from '../../api/notificationApi';
import { setProfile } from '../../redux/slices/profileSlice';
import { updateCountNotifications } from '../../api/userApi';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const socket = useSelector((state) => state.socket.data);

	const queryClient = useQueryClient();

	const post = queryClient.getQueryData(['post', id]);
	const userId = useSelector((state) => state.user.data?.info?.id);

	useQuery(['post', id], () => getPostById(id), {
		onSuccess: (data) => {
			dispatch(setProfile(data.user));
		},
		onError: (error) => {
			if (error.response.status === 404) {
				window.location.href = '/404';
			}
		},
		retry: 0,
	});

	const updateLocalPost = (updatedPost) => {
		queryClient.setQueryData(['post', id], (oldPost) => {
			return {
				...oldPost,
				...updatedPost,
			};
		});
	};

	const updateUserIncreaseNumOfNotification = useMutation(
		updateCountNotifications,
	);
	const createNotificationLikePostMutation = useMutation(createNotification, {
		onSuccess: (data) => {
			const Increase = {
				isIncrease: true,
				userId: data.receiverId,
			};
			updateUserIncreaseNumOfNotification.mutate(Increase);
		},
	});
	const likePostMutation = useMutation(likePost, {
		onSuccess: (data) => {
			queryClient.setQueryData(['post', post.id], data);
			callApiCreateNotification(
				data,
				NotificationType.LIKE,
				createNotificationLikePostMutation,
				userId,
			);
		},
	});

	const unlikePostMutation = useMutation(unLikePost, {
		onSuccess: (data) => {
			queryClient.setQueryData(['post', post.id], data);
		},
	});

	const handleReceiveLikePostSocket = (payload) => {
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
				socket.unsubscribe(topic);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [post?.id, socket]);

	return (
		<div className="flex flex-col">
			<Main>
				{post && (
					<PostProvider post={post} onUpdatePost={updateLocalPost}>
						<Post
							post={post}
							onLike={likePostMutation.mutate}
							onUnlike={unlikePostMutation.mutate}
						/>
					</PostProvider>
				)}
			</Main>
		</div>
	);
};

export default PostPage;

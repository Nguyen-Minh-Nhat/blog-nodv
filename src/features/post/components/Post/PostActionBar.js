import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, unLikePost } from '../../../../api/postApi';
import IconWrapper from '../../../../components/IconWrapper';
import LikeButton from '../../../../components/LikeButton';
import Number from '../../../../components/Number';
import { setPost } from '../../../../redux/slices/postSlice';
import { CommentIcon, DotIcon } from '../../../../components/Icons';

const PostActionBar = ({ post, onComment }) => {
	const userId = useSelector((state) => state.user.data.info.id);
	const isLiked = post?.userLikeIds?.includes(userId);
	const dispatch = useDispatch();

	const likePostMutation = useMutation(likePost, {
		onSuccess: (data) => {
			dispatch(setPost(data.data));
		},
	});

	const unlikePostMutation = useMutation(unLikePost, {
		onSuccess: (data) => {
			dispatch(setPost(data.data));
		},
	});

	const handleLike = (isLike) => {
		if (isLike) {
			likePostMutation.mutate(post.id);
		} else {
			unlikePostMutation.mutate(post.id);
		}
	};
	return (
		<div className="flex h-10 items-center rounded-full bg-white px-4 font-thin text-[#757575] shadow">
			<ButtonAction>
				<LikeButton isLiked={isLiked} onClick={handleLike} />
				<Number>{post?.userLikeIds ? post.userLikeIds.length : 0}</Number>
			</ButtonAction>

			<DivideLine></DivideLine>

			<ButtonAction onClick={onComment}>
				<IconWrapper>
					<CommentIcon />
				</IconWrapper>
				<Number>{0}</Number>
			</ButtonAction>

			<DivideLine></DivideLine>

			<ButtonAction>
				<DotIcon />
			</ButtonAction>
		</div>
	);
};

const DivideLine = () => <div className="mx-4 font-thin opacity-60">|</div>;

const ButtonAction = ({ children, onClick = () => {} }) => {
	return (
		<div
			className="flex cursor-pointer items-center hover:text-black"
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default PostActionBar;

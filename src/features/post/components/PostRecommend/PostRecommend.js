import { Avatar } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import { getPostsRecommend } from '../../../../api/postApi';
import PanelWrapper from '../../../../components/PanelWrapper';
import { appRoutes } from '../../../../routes/AppRoutes';
import PostThumbnail from '../PostPreview/PostThumbnail';

const PostRecommend = () => {
	const { pathname } = useLocation();

	const id = pathname.split('/')[2];
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		return () => {
			setShowMore(false);
		};
	}, [pathname]);

	const { data: posts, isSuccess } = useQuery(['postsRecommend', id], () =>
		getPostsRecommend(id)
	);

	const postsRender = useMemo(() => {
		if (isSuccess) {
			const data = posts.slice(0, 4);
			const dataShowMore = posts.slice(4, posts.length);
			return { data, dataShowMore };
		}
	}, [posts, isSuccess]);

	return (
		<PanelWrapper title="Suggesting posts">
			{isSuccess && <PostList posts={postsRender.data} />}
			{showMore && (
				<div className="mt-6">
					<PostList posts={postsRender?.dataShowMore} />
				</div>
			)}
			{postsRender?.dataShowMore.length > 0 && (
				<div
					className="cursor-pointer py-4 opacity-75 hover:opacity-100"
					onClick={() => setShowMore(!showMore)}
				>
					{showMore ? (
						'Show less'
					) : (
						<span> Show more ({postsRender?.dataShowMore.length})</span>
					)}
				</div>
			)}
		</PanelWrapper>
	);
};

const PostList = ({ posts = [] }) => {
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id} className="mb-6 last:mb-0">
					<Post post={post} />
				</div>
			))}
		</div>
	);
};

const Post = ({ post }) => {
	return (
		<div className="flex gap-4">
			<div className="flex-1">
				<User user={post.user} />
				<Link to={`${appRoutes.POST}/${post.id}`}>
					<span className="font-bold line-clamp-2">{post.title}</span>
				</Link>
			</div>
			<Link to={`${appRoutes.POST}/${post.id}`}>
				<PostThumbnail size="h-16 w-16" />
			</Link>
		</div>
	);
};

const User = ({ user }) => {
	return (
		<Link
			to={`${appRoutes.PROFILE}/${user.email}`}
			className="flex items-center gap-2"
		>
			<Avatar src={user.avatar} className="h-8 w-8" />
			<span className="text-sm">{user.username}</span>
		</Link>
	);
};

export default PostRecommend;

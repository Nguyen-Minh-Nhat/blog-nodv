import { Avatar } from '@mui/material';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getPostsRecommend } from '../../../../api/postApi';
import PanelWrapper from '../../../../components/PanelWrapper';
import PostThumbnail from '../PostPreview/PostThumbnail';

const PostRecommend = () => {
	const { pathname } = useLocation();

	const id = pathname.split('/')[2];

	const { data: posts, isSuccess } = useQuery('postsRecommend', () =>
		getPostsRecommend(id)
	);

	const [showMore, setShowMore] = useState(false);

	const postsRender = useMemo(() => {
		if (isSuccess) {
			const data = posts.slice(0, 4);
			const dataShowMore = posts.slice(4, posts.length);
			return { data, dataShowMore };
		}
	}, [posts, isSuccess]);

	return (
		<PanelWrapper title="Relative posts">
			{isSuccess && <PostList posts={postsRender.data} />}
			{showMore && (
				<div className="mt-6">
					<PostList posts={postsRender.dataShowMore} />
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
						<span> Show more ({postsRender.dataShowMore.length})</span>
					)}
				</div>
			)}
		</PanelWrapper>
	);
};

const PostList = ({ posts }) => {
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
				<div>
					<span className="font-bold line-clamp-2">{post.title}</span>
				</div>
			</div>
			<PostThumbnail size="h-16 w-16" />
		</div>
	);
};

const User = ({ user }) => {
	return (
		<div className="flex items-center gap-2">
			<Avatar src={user.avatar} className="h-8 w-8" />
			<span className="text-sm">{user.username}</span>
		</div>
	);
};

export default PostRecommend;

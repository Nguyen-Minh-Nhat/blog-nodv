import { Link } from 'react-router-dom';
import PostPreviewFooter from './PostPreviewFooter';
import PostThumbnail from './PostThumbnail';
import { appRoutes } from '../../../../routes/AppRoutes';
import { useEffect } from 'react';
import { usePost } from '../../context/PostContext';
import { useRef } from 'react';
import { useState } from 'react';

const PostPreviewBody = () => {
	const { post } = usePost();
	const postLink = `${appRoutes.POST}/${post.id}`;
	const titleRef = useRef(null);
	const [subtitleClamp, setSubtitleClamp] = useState(3);

	useEffect(() => {
		if (titleRef.current) {
			const titleHeight = titleRef.current.clientHeight;
			if (titleHeight > 40) {
				setSubtitleClamp(2);
			}
		}
	}, [titleRef]);

	return (
		<div className="mt-3 flex">
			<div className="flex-1">
				<Link to={postLink} className="flex h-24 max-w-full flex-col">
					<div className="flex" ref={titleRef}>
						<h3 className="mb-2 text-xl font-bold sm:text-2xl">
							{post.title}
						</h3>
					</div>
					<div className="hidden sm:block">
						<p
							className={`text-slate-600 ${
								subtitleClamp === 3
									? 'line-clamp-3'
									: 'line-clamp-2'
							}`}
						>
							{post.subtitle}
						</p>
					</div>
				</Link>
				<PostPreviewFooter post={post} />
			</div>
			<div className="ml-5 sm:ml-14">
				<Link to={postLink}>
					<PostThumbnail src={post.thumbnail} />
				</Link>
			</div>
		</div>
	);
};

export default PostPreviewBody;

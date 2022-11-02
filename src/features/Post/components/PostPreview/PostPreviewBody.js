import PostPreviewFooter from './PostPreviewFooter';
import PostThumbnail from './PostThumbnail';

const PostPreviewBody = ({ post }) => {
	return (
		<div className="mt-3 flex">
			<div className="flex-1">
				<div className="flex">
					<h3 className="mb-2 text-[22px] font-bold">{post.title}</h3>
				</div>
				<div>
					<p className="max-h-[72px] text-slate-600 line-clamp-3">
						{post.subtitle}
					</p>
				</div>
				<PostPreviewFooter post={post} />
			</div>
			<div>
				<div className="ml-14 ">
					<PostThumbnail imagePath={post.thumbnail} />
				</div>
			</div>
		</div>
	);
};

export default PostPreviewBody;

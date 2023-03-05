const PostThumbnail = ({ src, size = 'h-28 w-28' }) => {
	return (
		<div className={`${size} overflow-hidden rounded-lg`}>
			{src ? (
				<img
					src={src}
					alt="post img"
					className="h-full w-full object-cover"
				/>
			) : (
				<div className="flex h-full w-full items-center justify-center bg-gray-200 font-bold text-slate-600">
					NODV
				</div>
			)}
		</div>
	);
};

export default PostThumbnail;

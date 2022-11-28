const PostThumbnail = ({ imagePath }) => {
	return (
		<div className="h-28 w-28 overflow-hidden rounded-xl">
			{imagePath && (
				<img
					src={imagePath}
					alt="post img"
					className="h-full w-full object-cover"
				/>
			)}
		</div>
	);
};

export default PostThumbnail;

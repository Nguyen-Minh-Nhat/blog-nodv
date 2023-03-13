import clsx from 'clsx';

// const gradientColors = [
// 	'from-cyan-200 to-blue-500',
// 	'from-pink-200 to-red-500',
// 	'from-yellow-200 to-orange-500',
// 	'from-indigo-500 via-purple-500 to-pink-500',
// 	'from-green-400 to-blue-500',
// ];

const PostThumbnail = ({ src }) => {
	// const randomColor = useMemo(
	// 	() => gradientColors[Math.floor(Math.random() * gradientColors.length)],
	// 	[],
	// );
	return (
		<div className={`h-24 w-24 overflow-hidden rounded-lg sm:h-28 sm:w-28`}>
			{src ? (
				<img
					src={src}
					alt="post img"
					className="h-full w-full object-cover"
				/>
			) : (
				<div
					className={clsx(
						'flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-200 to-blue-500  font-bold text-white',
						// randomColor,
					)}
				>
					NODV
				</div>
			)}
		</div>
	);
};

export default PostThumbnail;

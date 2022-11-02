import IconWrapper from '../../../../components/IconWrapper';

const PostActionBar = ({ onComment, onLike }) => {
	return (
		<div className="flex h-10 items-center rounded-full bg-white px-4 font-thin text-[#757575] shadow">
			<div className="flex cursor-pointer items-center hover:text-black">
				<IconWrapper>
					<i className="fa-light fa-hands-clapping text-[18px]"></i>
				</IconWrapper>
				<span className="ml-1 mt-1 text-sm">0</span>
			</div>
			<div className="mx-4 font-thin opacity-60">|</div>
			<div
				className="flex cursor-pointer items-center hover:text-black"
				onClick={onComment}
			>
				<IconWrapper>
					<i className="fa-light fa-comment mt-1 text-[18px]"></i>
				</IconWrapper>
				<span className="ml-1 mt-1 text-sm">0</span>
			</div>
			<div className="mx-4 text-lg font-thin opacity-60">|</div>
			<div>
				<i className="fa-solid fa-ellipsis text-lg"></i>
			</div>
		</div>
	);
};

export default PostActionBar;

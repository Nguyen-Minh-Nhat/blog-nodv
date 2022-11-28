import Post from '../../../features/post';

const Main = ({ post }) => {
	return (
		<div className="relative flex-1 overflow-y-auto">
			<div className="mx-auto h-full w-[700px] max-w-full">
				<Post post={post} />
			</div>
		</div>
	);
};

export default Main;

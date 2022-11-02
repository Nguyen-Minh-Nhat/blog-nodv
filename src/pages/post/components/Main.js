import Post from '../../../features/post';

const Main = ({ post }) => {
	return (
		<div className="relative h-full overflow-y-auto">
			<div className="mx-auto w-[700px] max-w-full">
				<Post post={post} />
			</div>
		</div>
	);
};

export default Main;

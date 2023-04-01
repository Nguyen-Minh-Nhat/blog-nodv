import { PostListFetch } from '../../../features/post/components';
import { getPosts } from '../../../api/postApi';

const LogoutPostList = () => {
	const storeKey = ['posts-home']; //key for react-query
	return (
		<div className="max-w-[700px]">
			<PostListFetch queryKey={storeKey} queryFn={getPosts} />
		</div>
	);
};

export default LogoutPostList;

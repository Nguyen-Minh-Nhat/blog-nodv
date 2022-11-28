import PostPreview from './PostPreview';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost, publishPost, unpublishPost } from '../../../api/postApi';
import { toast } from 'react-toastify';

export const PostList = ({ postList = [] }) => {
	const queryClient = useQueryClient();
	const deletePostMutation = useMutation(deletePost, {
		onSuccess: () => {
			toast.success('Post deleted successfully');
		},
	});

	const publishPostMutation = useMutation(publishPost, {
		onSuccess: (data) => {
			queryClient.setQueryData(['posts'], data);
			toast.success('Post was published');
		},
	});

	const unpublishPostMutation = useMutation(unpublishPost, {
		onSuccess: (data) => {
			queryClient.setQueryData(['posts'], data);
			toast.success('Post was unpublished ');
		},
	});
	return (
		<div className="flex flex-col">
			{postList.map((post) => (
				<div key={post.id} className="border-b pt-8 first:pt-0">
					<PostPreview post={post} />
				</div>
			))}
		</div>
	);
};

export default PostList;

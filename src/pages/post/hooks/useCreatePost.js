import { createPost } from '../../../api/postApi';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';

export const useCreatePost = (
	options = {
		onSuccess: null,
		onError: null,
	},
) => {
	const { onSuccess, onError } = options;
	return useMutation((data) => createPost(data), {
		onSuccess: (data) => {
			onSuccess && onSuccess(data);
			toast.success('Post created successfully');
		},
		onError: (error) => {
			onError && onError(error);
			console.log('error from useCreatePost', error);
		},
	});
};

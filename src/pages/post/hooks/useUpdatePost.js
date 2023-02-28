import { updatePost } from '../../../api/postApi';
import { useMutation } from 'react-query';

export const useUpdatePost = (
	options = {
		onSuccess: null,
		onError: null,
	},
) => {
	const { onSuccess, onError } = options;

	return useMutation((data) => updatePost(data), {
		onSuccess: (_, variable) => {
			onSuccess && onSuccess(variable);
		},
		onError: (error) => {
			onError && onError(error);
			console.log('error from useUpdatePost', error);
		},
	});
};

import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createPost, getPostById, updatePost } from '../../api/postApi';
import Editor from '../../components/Editor';
import ModalTrigger from '../../components/ModalTrigger';
import QuestionDialog from '../../components/QuestionDialog/QuestionDialog';
import PostPublicPreview from '../../features/post/components/PostPublicPreview';
import usePrompt from '../../hooks/usePrompt';
import { convertToPost } from '../../utils/editorJsUtils';
import Header from './components/Header';

const initialPost = {
	title: '',
	subtitle: '',
	content: {
		blocks: [
			{
				id: 'sheNwCUP5A',
				type: 'header',
				data: {
					level: 1,
				},
			},
		],
	},
	thumbnail: '',
	topics: [],
	createdDate: new Date(),
};

const WritePage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [editorJsData, setEditorJsData] = useState(null);
	const [showDialog, setShowDialog] = useState(false);
	const [post, setPost] = useState(initialPost);
	const [isLoading, setIsLoading] = useState(false);
	const isEdit = !!id;

	useEffect(() => {
		const getPost = async () => {
			setIsLoading(true);
			const data = await getPostById(id);
			setPost({ ...data, content: JSON.parse(data.content) });
			setIsLoading(false);
		};
		if (id) {
			getPost();
		}
	}, [id]);
	// create post
	const createPostMutation = useMutation(createPost, {
		onSuccess: (data) => {
			navigate(`/post/${data.id}`);
		},
	});

	const updatePostMutation = useMutation(updatePost, {
		onSuccess: (data) => {
			navigate(`/post/${data.id}`);
			toast.success('Post update successfully');
		},
	});

	const [showPrompt, confirmNavigation, cancelNavigation] =
		usePrompt(showDialog);

	const convertRawContentToPost = (editorJsData) => {
		const post = convertToPost(editorJsData);
		setPost((prev) => ({
			...prev,
			...post,
		}));
	};

	const handleShowPublicPreview = () => {
		convertRawContentToPost(editorJsData);
	};

	const handlePublish = () => {
		setShowDialog(false);
		post.content = editorJsData;
		const postUpload = {
			title: post.title,
			subtitle: post.subtitle,
			content: JSON.stringify(post.content),
			thumbnail: post.thumbnail,
			topics: post.topics,
			timeRead: post.timeRead,
		};
		if (isEdit) {
			updatePostMutation.mutate({ id, ...postUpload });
		} else {
			createPostMutation.mutate(postUpload);
		}
	};

	const autoSave = (editorJsData, timeRead) => {
		setEditorJsData(editorJsData);
		setPost((prev) => ({ ...prev, timeRead }));
		setShowDialog(true);
	};

	return (
		<div>
			<div className="sticky top-0 z-[100] bg-white">
				<Header>
					<ModalTrigger
						button={
							<Button
								color="success"
								variant="contained"
								className="btn ml-2 rounded-full normal-case"
								onClick={handleShowPublicPreview}
								disabled={!editorJsData}
								disableElevation
							>
								{isEdit ? 'Save' : 'Publish'}
							</Button>
						}
					>
						<PostPublicPreview
							post={post}
							setPost={setPost}
							onSubmit={handlePublish}
						/>
					</ModalTrigger>
				</Header>
			</div>
			{!isLoading && <Editor onChange={autoSave} defaultValue={post.content} />}
			<QuestionDialog
				title="Warning"
				message="There are some changes? Are you sure you want to navigate!!!!"
				open={showPrompt}
				onClose={cancelNavigation}
				onCancel={cancelNavigation}
				onConfirm={confirmNavigation}
			/>
		</div>
	);
};

export default WritePage;

import { useCreatePost, useUpdatePost } from '../post/hooks';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@mui/material';
import Editor from '../../components/Editor';
import EditorJSHTML from 'editorjs-html';
import Header from './components/Header';
import ModalTrigger from '../../components/ModalTrigger';
import PostPublicPreview from '../../features/post/components/PostPublicPreview';
import QuestionDialog from '../../components/QuestionDialog/QuestionDialog';
import { appRoutes } from '../../routes/AppRoutes';
import { convertToPost } from '../../utils/editorJsUtils';
import { getPostById } from '../../api/postApi';
import usePrompt from '../../hooks/usePrompt';

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
			setPost({ ...data, content: data.content });
			setIsLoading(false);
		};
		if (id) {
			getPost();
		}
	}, [id]);
	// create post
	const { mutate: createPost } = useCreatePost({
		onSuccess: (data) => {
			navigate(`${appRoutes.POST}/${data.id}`);
		},
	});

	const { mutate: updatePost } = useUpdatePost({
		onSuccess: (data) => {
			navigate(`${appRoutes.POST}/${data.id}`);
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

	const handlePublish = async () => {
		setShowDialog(false);
		const editor = new EditorJSHTML();
		const htmlContent = await editor.parse(editorJsData).join('');
		const postUpload = {
			title: post.title,
			subtitle: post.subtitle,
			content: htmlContent,
			thumbnail: post.thumbnail,
			topics: post.topics,
			timeRead: post.timeRead,
		};
		if (isEdit) {
			updatePost({ id, ...postUpload });
		} else {
			createPost({ ...postUpload });
		}
	};

	const autoSave = (editorJsData, timeRead) => {
		console.log(editorJsData);
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
			{!isLoading && (
				<Editor onChange={autoSave} defaultValue={post.content} />
			)}
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

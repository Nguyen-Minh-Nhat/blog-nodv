import { Modal } from '@mui/material';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { createPost } from '../../api/postApi';
import Editor from '../../components/Editor';
import QuestionDialog from '../../components/QuestionDialog/QuestionDialog';
import PostPublicPreview from '../../features/post/components/PostPublicPreview';

import usePrompt from '../../hooks/usePrompt';
import { convertToPost } from '../../utils/editorJsUtils';
import Header from './components/Header';
const WritePage = () => {
	const user = useSelector((state) => state.user.data.info);
	const [showPublicModal, setShowPublicModal] = useState(false);
	const [editorJsData, setEditorJsData] = useState(null);
	const [showDialog, setShowDialog] = useState(false);
	const [post, setPost] = useState({
		title: '',
		subtitle: '',
		content: '',
		user,
		thumbnail: '',
		topics: [],
		createdDate: new Date(),
	});

	const createPostMutation = useMutation(createPost, {
		onSuccess: (data) => {
			console.log(data);
		},
	});

	const [showPrompt, confirmNavigation, cancelNavigation] =
		usePrompt(showDialog);

	const convertRawContentToPost = (editorJsData) => {
		const post = convertToPost(editorJsData);

		setPost((prev) => ({
			...prev,
			title: post.title,
			subtitle: post.subtitle,
			thumbnail: post.thumbnail,
			images: post.images,
		}));
	};

	const handleShowPublicPreview = () => {
		convertRawContentToPost(editorJsData);
		setShowPublicModal(true);
	};

	const handlePublic = () => {
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
		createPostMutation.mutate(postUpload);
	};

	const autoSave = (editorJsData, timeRead) => {
		setEditorJsData(editorJsData);
		setPost((prev) => ({ ...prev, timeRead }));
		setShowDialog(true);
	};

	return (
		<div className="h-screen overflow-y-scroll">
			<div className="sticky top-0 z-[100] bg-white">
				<Header
					onPublic={handleShowPublicPreview}
					enablePublic={!!editorJsData}
				/>
			</div>
			<Editor onChange={autoSave} />
			<Modal open={showPublicModal} onClose={() => setShowPublicModal(false)}>
				<div className="position-center absolute">
					<PostPublicPreview
						post={post}
						setPost={setPost}
						onSubmit={handlePublic}
						onClose={() => setShowPublicModal(false)}
					/>
				</div>
			</Modal>
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

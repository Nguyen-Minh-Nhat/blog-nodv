import { Button } from '@mui/material';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../api/postApi';
import Editor from '../../components/Editor';
import ModalTrigger from '../../components/ModalTrigger';
import QuestionDialog from '../../components/QuestionDialog/QuestionDialog';
import PostPublicPreview from '../../features/post/components/PostPublicPreview';
import usePrompt from '../../hooks/usePrompt';
import { convertToPost } from '../../utils/editorJsUtils';
import Header from './components/Header';
const WritePage = () => {
	const user = useSelector((state) => state.user.data.info);
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

	const navigate = useNavigate();
	const createPostMutation = useMutation(createPost, {
		onSuccess: (data) => {
			navigate(`/post/${data.data.id}`);
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
					headerAction={
						<div className="flex">
							<Button color="success" className="btn rounded-full normal-case">
								Save
							</Button>
							<ModalTrigger
								button={
									<Button
										color="success"
										variant="contained"
										className="btn ml-2 rounded-full normal-case"
										onClick={handleShowPublicPreview}
										disabled={!editorJsData}
									>
										Public
									</Button>
								}
							>
								<PostPublicPreview
									post={post}
									setPost={setPost}
									onSubmit={handlePublic}
								/>
							</ModalTrigger>
						</div>
					}
				/>
			</div>
			<Editor onChange={autoSave} />
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

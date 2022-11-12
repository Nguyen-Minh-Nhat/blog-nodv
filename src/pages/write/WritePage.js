import { Modal } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Editor from '../../components/Editor';
import QuestionDialog from '../../components/QuestionDialog/QuestionDialog';
import PostPublicPreview from '../../features/post/components/PostPublicPreview';

import usePrompt from '../../hooks/usePrompt';
import Header from './components/Header';
const WritePage = () => {
	const user = useSelector((state) => state.user.data.info);
	const [showPublicModal, setShowPublicModal] = useState(false);
	const [rawContent, setRawContent] = useState(null);
	const [showDialog, setShowDialog] = useState(false);
	const [post, setPost] = useState({
		title: '',
		subtitle: '',
		content: '',
		user,
		thumbnail: '',
		topics: [],
		createdAt: new Date(),
	});

	const [showPrompt, confirmNavigation, cancelNavigation] =
		usePrompt(showDialog);

	const convertRawContentToPost = (rawContent) => {
		let title = '';
		let subtitle = '';
		const imageList = [];

		rawContent.blocks.forEach((block) => {
			if (!title && (block.type === 'header' || block.type === 'paragraph')) {
				title = block.data.text;
				return;
			}

			if (
				title &&
				!subtitle &&
				(block.type === 'header' || block.type === 'paragraph')
			) {
				subtitle = block.data.text;
				return;
			}

			if (block.type === 'image') imageList.push(block.data.file.url);
		});

		setPost((prev) => ({
			...prev,
			title,
			subtitle,
			thumbnail: imageList[0],
			imageList,
		}));
	};

	const handleShowPublicPreview = () => {
		convertRawContentToPost(rawContent);
		setShowPublicModal(true);
	};

	const handlePublic = () => {
		setShowDialog(false);
		post.content = rawContent;
	};

	const autoSave = (rawContent, timeRead) => {
		setRawContent(rawContent);
		setPost((prev) => ({ ...prev, timeRead }));
		setShowDialog(true);
	};

	return (
		<div className="h-screen overflow-y-scroll">
			<div className="sticky top-0 z-[100] bg-white">
				<Header
					onPublic={handleShowPublicPreview}
					enablePublic={!!rawContent}
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

import { useState } from 'react';
import { Alert, TextField } from '@mui/material';
import InputTopic from './InputTopics';
import ThumbnailSelectBox from './ThumbnailSelectBox';

const PostPublicEditor = ({ post, setPost }) => {
	const [thumbnailSelected, setThumbnailSelected] = useState(post.imageList[0]);
	const [topics, setTopics] = useState(post.topics);
	return (
		<div className="">
			<Alert severity="info" className="mb-8">
				<span className="font-bold">Note:</span> Changes here will affect how
				your story appears in public places like Medium’s homepage and in
				subscribers’ inboxes — not the contents of the story itself.
			</Alert>
			<div className="flex flex-1 flex-col gap-4">
				<TextField
					fullWidth
					label="Title"
					defaultValue={post.title}
					autoFocus
					sx={{
						'& .MuiInputBase-input': {
							fontWeight: 'bold',
						},
					}}
					onChange={(e) =>
						setPost((prev) => ({ ...prev, title: e.target.value }))
					}
				/>
				<TextField
					fullWidth
					multiline
					rows={3}
					label="Subtitle"
					defaultValue={post.subtitle}
					onChange={(e) =>
						setPost((prev) => ({ ...prev, subtitle: e.target.value }))
					}
				/>
				<div>
					<InputTopic
						defaultValue={topics}
						onChange={(topics) => {
							setTopics(topics);
							setPost((prev) => ({ ...prev, topics: topics }));
						}}
					/>
					<span className="text-sm text-slate-500">
						<span className="font-bold">Note:</span> Add or change topics (up to
						5) so readers know what your story is about
					</span>
				</div>

				<ThumbnailSelectBox
					imageList={post.imageList}
					onChange={(thumbnailSelected) => {
						setThumbnailSelected(thumbnailSelected);
						setPost((prev) => ({ ...prev, thumbnail: thumbnailSelected }));
					}}
					initial={thumbnailSelected}
				/>
			</div>
		</div>
	);
};

export default PostPublicEditor;

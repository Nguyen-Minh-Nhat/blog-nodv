import { useState } from 'react';
import { Button, IconButton, Tooltip } from '@mui/material';
import PostPublicEditor from '../PostPublicEditor';
import PostPreview from '../PostPreview';
const PostPublicPreview = ({ post, setPost, onSubmit, onClose }) => {
	const [isEdit, setIsEdit] = useState(false);
	return (
		<div className="w-[700px] rounded-lg bg-white">
			<div className="mb-4 flex items-center justify-between gap-2 border-b px-6 py-4">
				<h2 className="text-xl font-bold">Preview before upload</h2>
				<div className="flex gap-4">
					{isEdit ? (
						<Tooltip title="Preview" placement="top">
							<IconButton
								size="small"
								className="h-10 w-10 bg-slate-50 hover:bg-slate-100"
								onClick={() => setIsEdit(false)}
							>
								<i className="fa-solid fa-eye"></i>
							</IconButton>
						</Tooltip>
					) : (
						<Tooltip title="Edit" placement="top">
							<IconButton
								size="small"
								className="h-10 w-10 bg-slate-50 hover:bg-slate-100"
								onClick={() => setIsEdit(true)}
							>
								<i className="fa-solid fa-edit"></i>
							</IconButton>
						</Tooltip>
					)}
					<Button
						color="success"
						className="btn rounded-full normal-case"
						variant="contained"
						onClick={onSubmit}
					>
						Public now
					</Button>
					<IconButton
						size="small"
						className="h-10 w-10 bg-slate-50 hover:bg-slate-100"
						onClick={onClose}
					>
						<i className="fa-solid fa-xmark"></i>
					</IconButton>
				</div>
			</div>
			<div className="mx-6 pb-6">
				{isEdit ? (
					<PostPublicEditor post={post} setPost={setPost} />
				) : (
					<PostPreview post={post} />
				)}
			</div>
		</div>
	);
};

export default PostPublicPreview;

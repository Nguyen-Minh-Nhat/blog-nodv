import React, { useState } from 'react';
import { Button, Drawer } from '@mui/material';
import { CommentContainer } from '../../../comment';
import PostActionBar from './PostActionBar';
import PostBody from './PostBody';
import PostHeader from './PostHeader';

const Post = ({ post, isPersona = false }) => {
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<PostHeader post={post} />
			<PostBody post={post} />
			<div>
				<Drawer anchor="right" open={open} onClose={handleClose}>
					<CommentContainer onClose={handleClose} />
				</Drawer>
			</div>
			<div className="sticky bottom-4 z-10 flex w-full justify-center">
				<PostActionBar onComment={() => setOpen(true)} />
			</div>
		</div>
	);
};

export default Post;

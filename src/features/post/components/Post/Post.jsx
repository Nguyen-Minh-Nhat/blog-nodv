import React, { useState } from 'react';

import { CommentContainer } from '../../../comment';
import { Drawer } from '@mui/material';
import PostAction from '../PostAction';
import PostActionBar from './PostActionBar';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import PostShares from './PostShares';
import { usePost } from '../../context/PostContext';

export const Post = ({ onLike, onUnlike }) => {
	const { post } = usePost();
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className="p relative h-full">
			<PostHeader post={post}>
				<PostShares />
				<PostAction post={post} />
			</PostHeader>
			<PostBody post={post} />
			<div>
				<Drawer anchor="right" open={open} onClose={handleClose}>
					<CommentContainer onClose={handleClose} post={post} />
				</Drawer>
			</div>
			<div className="sticky bottom-4 z-10 flex w-full justify-center">
				<PostActionBar
					post={post}
					onComment={() => setOpen(true)}
					onUnlike={onUnlike}
					onLike={onLike}
				/>
			</div>
		</div>
	);
};

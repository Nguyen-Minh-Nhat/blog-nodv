import React from 'react';
import PostCardBody from './PostCardBody';
import PostCardFooter from './PostCardFooter';
import PostCardHeader from './PostCardHeader';

const PostCard = () => {
	return (
		<div>
			<PostCardHeader />
			<PostCardBody />
			<PostCardFooter />
		</div>
	);
};

export default PostCard;

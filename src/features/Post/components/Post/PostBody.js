import React from 'react';
import Editor from '../../../../components/Editor';

const PostBody = ({ post }) => {
	return (
		<div className="custom max-width flex-1">
			<Editor readOnly defaultValue={post.content} />
		</div>
	);
};

export default PostBody;

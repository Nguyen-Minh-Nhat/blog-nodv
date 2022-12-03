import React from 'react';
import EditorReadOnly from '../../../../components/Editor/EditorReadOnly';

const PostBody = ({ post }) => {
	return (
		<div className="custom max-width flex-1">
			<EditorReadOnly defaultValue={JSON.parse(post.content)} />
		</div>
	);
};

export default PostBody;

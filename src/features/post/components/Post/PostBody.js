import EditorReadOnly from '../../../../components/Editor/EditorReadOnly';
import React from 'react';
import Topic from '../../../../components/Topic';

const PostBody = ({ post }) => {
	return (
		<div className="custom max-width flex-1">
			<EditorReadOnly defaultValue={post.content} />
			{post?.topics.length > 0 && (
				<div className="mt-10 flex gap-2">
					{post.topics.map((topic) => (
						<Topic topic={topic} key={topic.id} />
					))}
				</div>
			)}
		</div>
	);
};

export default PostBody;

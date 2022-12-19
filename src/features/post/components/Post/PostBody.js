import React from 'react';
import EditorReadOnly from '../../../../components/Editor/EditorReadOnly';
import Topic from '../../../../components/Topic';

const PostBody = ({ post }) => {
	return (
		<div className="custom max-width flex-1">
			<EditorReadOnly defaultValue={JSON.parse(post.content)} />
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

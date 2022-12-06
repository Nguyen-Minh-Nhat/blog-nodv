import React from 'react';
import { useQuery } from 'react-query';
import { getRandomTopics } from '../../../api/topicApi';
import TopicList from '../../../components/Topic/TopicList';

const LogoutTopics = () => {
	const { data: topics, isSuccess } = useQuery('randomTopics', getRandomTopics);
	return (
		<div className="max-w-sm border-b py-8">
			<span className="text-sm font-bold">
				DISCOVER MORE OF WHAT MATTERS TO YOU
			</span>
			<div className="mt-4"> {isSuccess && <TopicList topics={topics} />}</div>
		</div>
	);
};

export default LogoutTopics;

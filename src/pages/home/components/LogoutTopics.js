import React from 'react';
import TopicList from '../../../components/Topic/TopicList';
import { getRandomTopics } from '../../../api/topicApi';
import { useQuery } from 'react-query';

const LogoutTopics = () => {
	const { data: topics, isSuccess } = useQuery(
		'randomTopics',
		getRandomTopics,
	);
	return (
		<>
			{isSuccess && (
				<div className="border-b bg-white py-8 lg:max-w-sm">
					<span className="text-sm font-bold">
						DISCOVER MORE OF WHAT MATTERS TO YOU
					</span>
					<div className="mt-4">
						{' '}
						<TopicList topics={topics} />
					</div>
				</div>
			)}
		</>
	);
};

export default LogoutTopics;

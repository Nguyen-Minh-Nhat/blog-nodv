import React from 'react';
import { useQuery } from 'react-query';
import { getRecommendTopics } from '../../api/topicApi';
import TopicList from '../Topic/TopicList';

const RecommendTopic = () => {
	const { data: topics, isSuccess } = useQuery(
		'recommendTopics',
		getRecommendTopics,
		{
			refetchOnWindowFocus: false,
		}
	);
	return (
		<>
			<div className="mt-10">
				<h2 className="m-0 mb-5 block text-base font-medium leading-5">
					Recommended Topics
				</h2>
				{isSuccess && <TopicList topics={topics} />}
			</div>
		</>
	);
};

export default RecommendTopic;

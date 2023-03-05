import PanelWrapper from '../PanelWrapper';
import React from 'react';
import TopicList from '../Topic/TopicList';
import { getRecommendTopics } from '../../api/topicApi';
import { useQuery } from 'react-query';

const RecommendTopic = () => {
	const { data: topics, isSuccess } = useQuery(
		'recommendTopics',
		getRecommendTopics,
	);
	return (
		<>
			{isSuccess && (
				<PanelWrapper title="Recommend Topics">
					<TopicList topics={topics} />
				</PanelWrapper>
			)}
		</>
	);
};

export default RecommendTopic;

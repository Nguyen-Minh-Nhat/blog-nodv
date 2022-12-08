import React from 'react';
import { useQuery } from 'react-query';
import { getRecommendTopics } from '../../api/topicApi';
import PanelWrapper from '../PanelWrapper';
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
			<PanelWrapper title="Recommend Topics">
				{isSuccess && <TopicList topics={topics} />}
			</PanelWrapper>
		</>
	);
};

export default RecommendTopic;

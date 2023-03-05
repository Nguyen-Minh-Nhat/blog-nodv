import Topic from '../../../components/Topic';
import { searchTopics } from '../../../api/topicApi';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

const TopicsTab = () => {
	const [searchParam] = useSearchParams();

	const { data: topics, isSuccess } = useQuery(
		['topics', searchParam.get('query')],
		() => searchTopics(searchParam.get('query')),
	);
	return (
		<div className="flex flex-wrap gap-x-4 gap-y-2">
			{isSuccess && topics.map((topic) => <Topic topic={topic} />)}
		</div>
	);
};

export default TopicsTab;

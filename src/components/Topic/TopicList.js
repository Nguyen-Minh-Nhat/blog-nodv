import Topic from './Topic';

const TopicList = ({ topics }) => {
	return (
		<div className="flex flex-wrap gap-x-3 gap-y-2">
			{topics.map((topic) => (
				<Topic topic={topic} key={topic.id} />
			))}
		</div>
	);
};

export default TopicList;

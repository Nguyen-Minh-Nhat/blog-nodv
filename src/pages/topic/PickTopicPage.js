import { Button, Chip, IconButton } from '@mui/material';
import { useQuery } from 'react-query';
import { getTopics } from '../../api/topicApi';
import { CheckIcon, PlusIcon } from '../../components/Icons';

const PickTopicPage = () => {
	const { data: topics, isSuccess } = useQuery('topics', getTopics);
	console.log(topics);
	return (
		<div className="mx-auto max-w-[692px]">
			<div className="flex h-screen flex-col items-center justify-center">
				<h1 className="text-4xl text-black">What are you interested in?</h1>
				<span className="">Choose three or more.</span>
				<div className="my-10 flex flex-wrap justify-center gap-2">
					{isSuccess &&
						topics.map((topic) => (
							<Button
								color="inherit"
								variant="outlined"
								size="medium"
								className="btn h-9 border-gray-300 bg-[#e6e6e6]"
								key={topic.id}
								endIcon={<PlusIcon className={'font-thin'} />}
							>
								{topic.name}
							</Button>
						))}
				</div>
			</div>
		</div>
	);
};

export default PickTopicPage;

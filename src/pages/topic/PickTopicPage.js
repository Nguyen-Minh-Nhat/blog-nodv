import { CheckIcon, PlusIcon } from '../../components/Icons';
import { useMemo, useState } from 'react';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../layouts/components/Logo';
import { TopicFollow } from '../../features/topic/components/TopicFollow';
import { getTopics } from '../../api/topicApi';
import { useQuery } from 'react-query';

const LIMIT = 30;
const PickTopicPage = () => {
	const { data: topics, isSuccess } = useQuery('topics', getTopics);
	const [page, setPage] = useState(0);
	const topicsToShow = useMemo(() => {
		if (topics) {
			return topics.slice(page * LIMIT, LIMIT * (page + 1));
		}
		return [];
	}, [topics, page]);

	return (
		<div className="mx-auto flex h-screen max-w-[692px] flex-col items-center px-10">
			<div className="mt-10 text-center text-4xl font-bold">
				<div className="h-10 w-40">
					<Logo />
				</div>
			</div>
			<div className="mt-20 flex flex-1 flex-col items-center">
				<h1 className="text-4xl text-black">
					What are you interested in?
				</h1>
				<span className="mt-4 opacity-50">Choose three or more.</span>
				<div className="my-10 mb-6 flex flex-wrap justify-center gap-2">
					{isSuccess &&
						topicsToShow.map((topic) => (
							<TopicFollow key={topic.id} topicId={topic.id}>
								<Topic key={topic.id} topic={topic} />
							</TopicFollow>
						))}
				</div>
				{topicsToShow.length >= LIMIT ? (
					<Button
						color="success"
						className="btn mb-4"
						onClick={() => setPage(page + 1)}
					>
						Show more
					</Button>
				) : (
					<Button
						color="success"
						className="btn mb-4"
						onClick={() => setPage(0)}
					>
						Start over
					</Button>
				)}
				<Link to={`/`} className="mb-10">
					<Button
						className="btn w-[216px]"
						variant="contained"
						color="success"
					>
						Continue
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default PickTopicPage;

const Topic = ({ topic, onClick, isFollowing }) => {
	const [active, setActive] = useState(isFollowing);
	const handleActive = () => {
		setActive(!active);
		onClick(!active);
	};

	return (
		<Button
			color={active ? 'success' : 'inherit'}
			variant={active ? 'outlined' : ' contained'}
			size="medium"
			className={`btn h-9 ${
				active ? 'border-green-800' : 'bg-[#f6f6f6] hover:bg-[#e6e6e6]'
			}`}
			disableElevation
			key={topic.id}
			onClick={handleActive}
			endIcon={
				active ? <CheckIcon /> : <PlusIcon className={'font-thin'} />
			}
		>
			{topic.name}
		</Button>
	);
};

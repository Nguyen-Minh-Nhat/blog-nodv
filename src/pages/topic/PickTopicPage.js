import { Button } from '@mui/material';
import { useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { getTopics } from '../../api/topicApi';
import { addTopics } from '../../api/userApi';
import { CheckIcon, PlusIcon } from '../../components/Icons';
import Logo from '../../layouts/components/Logo';
import { setUser } from '../../redux/slices/userSlice';

const LIMIT = 30;
const PickTopicPage = () => {
	const { data: topics, isSuccess } = useQuery('topics', getTopics);
	const user = useSelector((state) => state.user.data.info);
	const [selectedTopics, setSelectedTopics] = useState(user.topics);
	const [page, setPage] = useState(0);
	const dispatch = useDispatch();

	const topicsToShow = useMemo(() => {
		if (topics) {
			return topics.slice(page * LIMIT, LIMIT * (page + 1));
		}
		return [];
	}, [topics, page]);

	const addTopicsMutation = useMutation(addTopics, {
		onSuccess: (data) => {
			dispatch(setUser(data));
		},
	});

	return (
		<div className="mx-auto flex h-screen max-w-[692px] flex-col items-center px-10">
			<div className="mt-10 text-center text-4xl font-bold">
				<div className="h-10 w-40">
					<Logo />
				</div>
			</div>
			<div className="mt-20 flex flex-1 flex-col items-center">
				<h1 className="text-4xl text-black">What are you interested in?</h1>
				<span className="mt-4 opacity-50">Choose three or more.</span>
				<div className="my-10 mb-6 flex flex-wrap justify-center gap-2">
					{isSuccess &&
						topicsToShow.map((topic) => (
							<Topic
								key={topic.id}
								topic={topic}
								isActive={selectedTopics.includes(topic.id)}
								onClick={(active) => {
									if (active) {
										setSelectedTopics((prev) => [...prev, topic.id]);
									} else {
										setSelectedTopics((prev) =>
											prev.filter((t) => t !== topic.id)
										);
									}
								}}
							/>
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
				<div className="mb-10">
					<Button
						className="btn w-[216px]"
						variant="contained"
						color="success"
						onClick={() => addTopicsMutation.mutate(selectedTopics)}
					>
						Continue
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PickTopicPage;

const Topic = ({ isActive, topic, onClick }) => {
	const [active, setActive] = useState(isActive);
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
			endIcon={active ? <CheckIcon /> : <PlusIcon className={'font-thin'} />}
		>
			{topic.name}
		</Button>
	);
};

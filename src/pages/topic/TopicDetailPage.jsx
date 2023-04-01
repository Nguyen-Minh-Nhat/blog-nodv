import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { MainContentLayout } from '../../layouts';
import { PostListFetch } from '../../features/post/components';
import Tab from '../../components/Tab';
import { TagIcon } from '../../components/Icons';
import { TopicFollow } from '../../features/topic/components/TopicFollow';
import { appRoutes } from '../../routes/AppRoutes';
import { getPosts } from '../../api/postApi';
import { getTopicDetail } from '../../api/topicApi';
import { useQuery } from 'react-query';

const tabItems = [
	{
		id: 0,
		title: 'Trending',
		value: 'trending',
	},
	{
		id: 1,
		title: 'Latest',
		value: 'latest',
	},
];
export const TopicDetailPage = () => {
	const location = useLocation();
	const { search } = location;
	const navigate = useNavigate();
	const { slug } = useParams();

	const { data: topic, isSuccess } = useQuery(['topic-detail', slug], () =>
		getTopicDetail(slug),
	);

	const getCurrentTab = (search) => {
		if (!search) return tabItems[0];
		const searchTabValue = new URLSearchParams(search).get('tab');
		const tab = tabItems.find((tab) => tab.value === searchTabValue);
		if (tab) return tab;
		return null;
	};

	const [currentTab, setCurrentTab] = useState(() => getCurrentTab(search));

	const handleTabChange = (tabId) => {
		const tab = tabItems.find((tab) => tab.id === tabId);
		navigate(`${location.pathname}?tab=${tab.value}`, { replace: true });
	};

	useEffect(() => {
		const tab = getCurrentTab(search);
		if (tab) setCurrentTab(tab);
		else navigate(`/${appRoutes.NOT_FOUND}`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

	const filter = useMemo(() => {
		return {
			topic: slug,
			sort: currentTab?.value,
		};
	}, [currentTab, slug]);

	return (
		isSuccess && (
			<MainContentLayout>
				<MainContentLayout.Header>
					<MainContentLayout.Title className="flex items-center gap-2 !font-normal">
						<div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
							<TagIcon className="h-6 w-6" />
						</div>
						{topic.name}
					</MainContentLayout.Title>
					<div className="my-4 mt-6 flex gap-4">
						<TopicFollow topicId={topic.id}>
							<TopicFollow.Button
								bgColorBefore="bg-green-700"
								textColorBefore="text-white"
								bgColorAfter="bg-white"
								textColorAfter="text-green-700"
							/>
						</TopicFollow>
						<div className="flex items-center gap-4">
							<NumberText
								number={topic.postCounts}
								text="stories"
							/>
							<NumberText
								number={topic.followerCounts}
								text="followers"
							/>
						</div>
					</div>
					<Tab
						tabItems={tabItems}
						onChange={handleTabChange}
						activeTab={currentTab}
					/>
				</MainContentLayout.Header>
				<MainContentLayout.Body>
					<PostListFetch
						filter={filter}
						queryKey="posts-topic"
						queryFn={getPosts}
					/>
				</MainContentLayout.Body>
			</MainContentLayout>
		)
	);
};

const NumberText = ({ number, text }) => {
	return (
		<div className="flex items-center gap-x-1">
			<span className="text-xl leading-3">{number}</span>
			<span className="leading-3 text-[#757575]">{text}</span>
		</div>
	);
};

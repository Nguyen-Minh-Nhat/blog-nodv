import { MainContentLayout } from '../../layouts';
import Tab from '../../components/Tab';
import { useParams } from 'react-router-dom';

const tabItems = [
	{
		id: 1,
		title: 'Trending',
	},
	{
		id: 2,
		title: 'Latest',
	},
	{
		id: 3,
		title: 'Most Viewed',
	},
];
export const TopicDetailPage = () => {
	const { slug } = useParams();
	return (
		<MainContentLayout>
			<MainContentLayout.Header>
				<MainContentLayout.Title>{slug}</MainContentLayout.Title>
				<Tab tabItems={tabItems} />
			</MainContentLayout.Header>
			<MainContentLayout.Body>Hello</MainContentLayout.Body>
		</MainContentLayout>
	);
};

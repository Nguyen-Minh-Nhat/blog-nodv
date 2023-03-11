import { Box, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { PlusIcon } from '../../../components/Icons';
import Tab from '../../../components/Tab';
import { appRoutes } from '../../../routes/AppRoutes';
import { getOwnTopics } from '../../../api/userApi';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

const Header = () => {
	const { data: topics, isSuccess } = useQuery('topics', getOwnTopics);
	const tabItems = useMemo(() => {
		if (isSuccess)
			return [
				{ id: 0, title: 'For you', value: 'for-you', type: 'feed' },
				{ id: 1, title: 'Following', value: 'following', type: 'feed' },
				...topics.map((topic) => ({
					id: topic.id,
					title: topic.name,
					value: topic.slug,
					type: 'topic',
				})),
			];
	}, [topics, isSuccess]);

	const navigate = useNavigate();
	const handleTabChange = (itemId) => {
		if (itemId === 0) {
			navigate('/');
			return;
		}
		const tabItem = tabItems.find((item) => item.id === itemId);
		const path = `/?${tabItem.type}=${tabItem.value}`;
		navigate(path);
	};

	return (
		<div className="sticky top-0 z-10 flex justify-center bg-white pt-6">
			<div className="mx-4 flex max-w-[700px] basis-[700px] items-center">
				<Box sx={{ width: '100%' }} className="flex">
					{isSuccess && (
						<>
							<Link
								to={appRoutes.TOPIC_PICK}
								className="flex h-[49px] items-center border-b"
							>
								<IconButton size="small" className="h-8 w-8">
									<PlusIcon />
								</IconButton>
							</Link>
							<Tab
								tabItems={tabItems}
								onChange={handleTabChange}
							/>
						</>
					)}
				</Box>
			</div>
		</div>
	);
};

export default Header;

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
			return [{ id: 0, title: 'For you', slug: '' }, ...topics];
	}, [topics, isSuccess]);
	const navigate = useNavigate();

	return (
		<div className="flex justify-center">
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
								onChange={(value) => {
									const slug = tabItems.find(
										(item) => item.id === value,
									)?.slug;
									navigate(`/${slug}`);
								}}
							/>
						</>
					)}
				</Box>
			</div>
		</div>
	);
};

export default Header;

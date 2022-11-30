import { Box, IconButton } from '@mui/material';
import { useMemo } from 'react';
import { PlusIcon } from '../../../components/Icons';
import Tab from '../../../components/Tab';

const Header = ({
	categories = [
		{ id: 1, title: 'Following' },
		{ id: 2, title: 'Technology' },
		{ id: 3, title: 'Programming' },
		{ id: 4, title: 'Art' },
	],
}) => {
	const tabItems = useMemo(() => {
		return [{ id: 0, title: 'For you' }, ...categories];
	}, [categories]);

	return (
		<div className="flex justify-center">
			<div className="mx-4 flex max-w-[700px] basis-[700px] items-center">
				<Box sx={{ width: '100%' }} className="flex">
					<div className="flex h-[49px] items-center border-b">
						<IconButton size="small" className="h-8 w-8">
							<PlusIcon />
						</IconButton>
					</div>
					<Tab tabItems={tabItems} />
				</Box>
			</div>
		</div>
	);
};

export default Header;

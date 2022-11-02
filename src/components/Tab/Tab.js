import { Box, Tab as MuiTab, Tabs } from '@mui/material';
import { useState } from 'react';

const Tab = ({
	tabItems = [
		{ id: 1, title: 'item 1' },
		{ id: 2, title: 'item 2' },
	],
}) => {
	const [value, setValue] = useState(tabItems[0].id);

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }} className="flex items-center border-b">
			<Tabs
				sx={{
					'& .MuiTabs-indicator': {
						backgroundColor: '#000',
						height: '1px',
					},
				}}
				value={value}
				onChange={handleChange}
				textColor="inherit"
				aria-label="secondary tabs example"
				scrollButtons="auto"
				variant="scrollable"
				className="flex items-center"
			>
				{tabItems.map((item) => (
					<MuiTab
						key={item.id}
						value={item.id}
						label={item.title}
						className="normal-case"
					/>
				))}
			</Tabs>
		</Box>
	);
};

export default Tab;

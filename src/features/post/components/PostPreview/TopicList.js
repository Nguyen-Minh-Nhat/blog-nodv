import { Chip, Popover } from '@mui/material';
import usePopover from '../../../../hooks/usePopover';

const TopicList = ({ topics = [], limitDisplay = topics.length }) => {
	const { id, handleClick, handleClose, anchorEl, open } = usePopover();
	return (
		<div className="flex gap-1">
			{topics.length > 0 &&
				[...Array(limitDisplay).keys()].map((index) => (
					<Chip
						key={index}
						size="small"
						label={topics[index].name}
						variant="filled"
						className="capitalize"
						clickable
					/>
				))}
			{topics.length > limitDisplay && limitDisplay && (
				<>
					<Chip
						size="small"
						label={'...'}
						variant="filled"
						className="capitalize"
						clickable
						onClick={handleClick}
					/>
					<Popover
						id={id}
						open={open}
						anchorEl={anchorEl}
						onClose={handleClose}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						transformOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
					>
						<div className="flex max-w-[160px] flex-wrap gap-2 p-2">
							{[...Array(topics.length - limitDisplay).keys()].map((index) => (
								<Chip
									key={index}
									size="small"
									label={topics[index + limitDisplay].name}
									variant="filled"
									className="capitalize"
									clickable
								/>
							))}
						</div>
					</Popover>
				</>
			)}
		</div>
	);
};

export default TopicList;

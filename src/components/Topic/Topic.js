import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
	return (
		<Link key={topic.id} to={`/topic/${topic.slug}`}>
			<Chip
				className="h-9 cursor-pointer rounded-full hover:bg-[#e6e6e6]"
				label={topic.name}
			/>
		</Link>
	);
};

export default Topic;

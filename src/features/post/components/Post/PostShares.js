import { Tooltip } from '@mui/material';
import { useMemo } from 'react';

const PostShares = () => {
	const socialMedia = useMemo(() => {
		return [
			{
				title: 'Twitter',
				icon: <i className="fa-brands fa-twitter"></i>,
			},
			{
				title: 'Facebook',
				icon: <i className="fa-brands fa-facebook"></i>,
			},
			{
				title: 'Linkedin',
				icon: <i className="fa-brands fa-linkedin"></i>,
			},
		];
	}, []);
	return (
		<div className="flex gap-4 text-lg">
			{socialMedia.map((item) => (
				<div
					key={item.title}
					className="cursor-pointer text-slate-400 hover:text-black"
				>
					<Tooltip title={item.title}>{item.icon}</Tooltip>
				</div>
			))}
			<div className="cursor-pointer text-slate-400 hover:text-black">
				<Tooltip title={'Copy link'}>
					<i className="fa-solid fa-link"></i>
				</Tooltip>
			</div>
		</div>
	);
};

export default PostShares;

import { Button } from '@mui/material';
import { useState } from 'react';

const ComponentPage = () => {
	const [isActive, setIsActive] = useState(true);
	return (
		<div className="container w-80 rounded bg-slate-400 shadow">
			<ul className="items flex flex-col gap-1 p-4">
				{[1, 2, 3].map((item) => (
					<li
						key={item}
						className="item h-10 w-fit shrink-0 rounded-xl border bg-slate-50"
					>
						<i className="icon h-10 w-10">icon</i>
						{isActive && <span className="w-16">item {item}</span>}
					</li>
				))}
			</ul>

			<Button
				onClick={() => setIsActive((prev) => !prev)}
				className="toggle-active"
			>
				Active sidebar
			</Button>
		</div>
	);
};

export default ComponentPage;

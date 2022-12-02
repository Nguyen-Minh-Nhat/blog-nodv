import { Button } from '@mui/material';
import { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';

const ComponentPage = () => {
	const [isOn, setIsOn] = useState(true);
	const db = getDatabase();
	const handleToggleLight = () => {
		setIsOn((prevIsOn) => !prevIsOn);
		set(ref(db, 'light/'), {
			isOn: isOn,
		});
	};
	return (
		<div className="container rounded bg-slate-400 shadow">
			<Button className="toggle-active" onClick={handleToggleLight}>
				{isOn ? 'Turn Off' : 'Turn On'}
			</Button>
		</div>
	);
};

export default ComponentPage;

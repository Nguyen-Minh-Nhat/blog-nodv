import { Button } from '@mui/material';
import ModalTrigger from '../../components/ModalTrigger';

const Test = ({ onClose }) => {
	return <Button onClick={onClose}>click</Button>;
};

const ComponentPage = () => {
	return (
		<div className="flex h-screen items-center justify-center">
			<ModalTrigger>
				<Test />
			</ModalTrigger>
		</div>
	);
};

export default ComponentPage;

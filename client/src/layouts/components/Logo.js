import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';

const Logo = () => {
	return (
		<div className="flex h-20 items-center justify-center px-4 font-bold">
			<Link to={'/'}>
				<Button>
					<img src={logo} alt="logo" className="h-full w-full object-contain" />
				</Button>
			</Link>
		</div>
	);
};

export default Logo;

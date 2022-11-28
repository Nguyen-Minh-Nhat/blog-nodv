import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Logo = () => {
	return (
		<Link to={'/'}>
			<Button>
				<img src={logo} alt="logo" className="h-full w-full object-contain" />
			</Button>
		</Link>
	);
};

export default Logo;

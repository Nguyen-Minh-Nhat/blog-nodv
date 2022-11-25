import { Button } from '@mui/material';
import TriggerLogin from '../../features/auth/components/TriggerLogin';
import Logo from './Logo';

const Header = () => {
	return (
		<div className="flex h-16 items-center justify-between border-b px-16">
			<div className="flex items-center justify-center gap-2">
				<div className="w-20">
					<Logo />
				</div>
				<span className="text- mb-1 text-xl font-bold text-slate-500">
					NOVD
				</span>
			</div>
			<TriggerLogin>
				<Button
					variant="contained"
					color="inherit"
					className="btn rounded-full normal-case "
				>
					Get Started
				</Button>
			</TriggerLogin>
		</div>
	);
};

export default Header;

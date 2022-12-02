import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import Search from '../../components/Search';
import TriggerLogin from '../../features/auth/components/TriggerLogin';
import WhoToFollow from '../../components/WhoToFollow/WhoToFollow';
import RecommendTopic from '../../components/RecommendTopic/RecommendTopic';

const SidebarRight = () => {
	const { isLogin } = useSelector((state) => state.user.data);

	return (
		<div className="min-h-screen w-[394px] border-l px-8">
			{!isLogin && (
				<div className="pt-10">
					<TriggerLogin>
						<Button
							variant="contained"
							fullWidth
							disableElevation
							className="btn bg-black text-white"
						>
							Get Started
						</Button>
					</TriggerLogin>
				</div>
			)}
			<div className="pt-10">
				<Search />
				<RecommendTopic />
				<WhoToFollow />
			</div>
		</div>
	);
};

export default SidebarRight;

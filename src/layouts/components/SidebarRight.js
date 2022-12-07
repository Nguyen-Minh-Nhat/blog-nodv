import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import Search from '../../components/Search';
import TriggerLogin from '../../features/auth/components/TriggerLogin';
import WhoToFollow from '../../components/WhoToFollow/WhoToFollow';
import RecommendTopic from '../../components/RecommendTopic/RecommendTopic';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from '../../routes/AppRoutes';
import InformationUser from '../../components/ViewUser/InformationUser';
import FollowingList from '../../components/UserList/FollowingList';

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
				<Routes>
					<Route
						path={appRoutes.PROFILE_USER}
						element={
							<>
								<InformationUser />
								<FollowingList />
							</>
						}
					/>
					<Route path={appRoutes.POST_DETAIL} element={<InformationUser />} />
					<Route
						path={appRoutes.HOME}
						element={
							<>
								<RecommendTopic />
								<WhoToFollow />
							</>
						}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default SidebarRight;

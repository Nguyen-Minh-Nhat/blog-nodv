import { Button } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import RecommendTopic from '../../components/RecommendTopic/RecommendTopic';
import Search from '../../components/Search';
import FollowingList from '../../components/UserList/FollowingList';
import InformationUser from '../../components/ViewUser/InformationUser';
import WhoToFollow from '../../components/WhoToFollow/WhoToFollow';
import TriggerLogin from '../../features/auth/components/TriggerLogin';
import PostRecommend from '../../features/post/components/PostRecommend';

const SidebarRight = () => {
	const { isLogin } = useSelector((state) => state.user.data);
	const { pathname } = useLocation();

	const renderSidebar = useMemo(() => {
		if (pathname.includes('profile')) {
			return (
				<>
					<InformationUser />
					<FollowingList />
				</>
			);
		}
		if (pathname.includes('posts')) {
			return (
				<>
					<InformationUser />
					<PostRecommend />
				</>
			);
		}
		if (pathname.includes('setting')) {
			return <></>;
		}
		return (
			<>
				<RecommendTopic />
				<WhoToFollow />
			</>
		);
	}, [pathname]);

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
				{renderSidebar}
			</div>
		</div>
	);
};

export default SidebarRight;

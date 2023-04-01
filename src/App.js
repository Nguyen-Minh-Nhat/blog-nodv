import AppRoutes, { appRoutes } from './routes/AppRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery, useQueryClient } from 'react-query';

import LoginModal from './pages/auth/LoginModal';
import SocketClient from './websocket/SocketClient';
import { getAuthInfo } from './api/authApi';
import { getPostIdsBookmark } from './api/bookmarkApi';
import { updateUserInfo } from './redux/slices/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
	const { isLogin } = useSelector((state) => state.user.data);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useQuery('user', getAuthInfo, {
		enabled: isLogin,
		onSuccess: (data) => {
			if (!data?.topics || !data?.topics.length) {
				// if user has no topics, redirect to topic page
				navigate(appRoutes.TOPIC_PICK);
			}
			dispatch(updateUserInfo(data));
		},
	});

	useQuery(['bookmarkIds'], getPostIdsBookmark, {
		enabled: isLogin,
		onSuccess: (data) => {
			dispatch(
				updateUserInfo({
					bookmarkIds: data,
				}),
			);
		},
	});

	const queryClient = useQueryClient();

	useEffect(() => {
		if (!isLogin) {
			queryClient.removeQueries('bookmarkIds');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLogin]);

	return (
		<div className="">
			<LoginModal />
			{isLogin && <SocketClient />}
			<AppRoutes />
		</div>
	);
};

export default App;

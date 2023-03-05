import AppRoutes, { appRoutes } from './routes/AppRoutes';
import { useDispatch, useSelector } from 'react-redux';

import LoginModal from './pages/auth/LoginModal';
import SocketClient from './websocket/SocketClient';
import { getAuthInfo } from './api/authApi';
import { getBookmarkByUserId } from './api/bookmarkApi';
import { setBookmark } from './redux/slices/bookmarkSlice';
import { setUser } from './redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

const App = () => {
	const { isLogin } = useSelector((state) => state.user.data);
	const bookmark = useSelector((state) => state.bookmark);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	useQuery('user', getAuthInfo, {
		enabled: isLogin,
		onSuccess: (data) => {
			if (!data?.topics || !data?.topics.length) {
				// if user has no topics, redirect to topic page
				navigate(appRoutes.TOPIC_PICK);
			}
			dispatch(setUser(data));
		},
	});

	useQuery(['bookmark', isLogin], getBookmarkByUserId, {
		enabled: isLogin,
		onSuccess: (data) => {
			// fix tam - chua hay vi useQuery van goi api
			if (!bookmark.postIds.length) {
				dispatch(setBookmark(data));
			}
		},
	});

	return (
		<div className="">
			<LoginModal />
			{isLogin && <SocketClient />}
			<AppRoutes />
		</div>
	);
};

export default App;

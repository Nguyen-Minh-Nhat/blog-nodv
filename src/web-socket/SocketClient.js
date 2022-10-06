import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import { setSocket } from '../redux/slices/socketSlice';

const SOCKET_URL = process.env.REACT_APP_API_URL + '/ws';

const SocketClient = () => {
	const user = { id: '12321312' };
	const dispatch = useDispatch();

	useEffect(() => {
		const sock = new SockJS(SOCKET_URL);
		const stomp = over(sock);
		stomp.debug = false;
		stomp.connect({}, () => onSuccessConnect(stomp), onError);

		return () => {
			stomp.disconnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user.id]);

	const onError = (err) => {
		console.log(err);
	};

	const onSuccessConnect = (stomp) => {
		dispatch(setSocket(stomp));
	};

	return <></>;
};

export default SocketClient;

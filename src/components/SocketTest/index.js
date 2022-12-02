import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useSelector } from 'react-redux';

const SocketTest = () => {
	const user = useSelector((state) => state.user.data.info);
	const socket = useSelector((state) => state.socket.data);
	const [message, setMessage] = useState('');
	const handleSendMessage = () => {};
	useEffect(() => {
		if (socket) {
			socket.subscribe('/topic/message', (message) => {
				console.log(message);
			});
		}

		return () => {
			if (socket) socket.unsubscribe('/topic/message');
		};
	}, [socket]);

	return (
		<div className="absolute top-1/2 left-1/2">
			<TextField
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				id="standard-basic"
				label="Standard"
				variant="standard"
			/>
			<Button variant="contained" onClick={handleSendMessage}>
				Submit
			</Button>
		</div>
	);
};

export default SocketTest;

import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useSelector } from 'react-redux';

const SocketTest = () => {
	const socket = useSelector((state) => state.socket.data);
	const [message, setMessage] = useState('');
	const handleSendMessage = () => {
		socket.send('/app/message', {}, message);
	};
	useEffect(() => {
		if (!socket) return;
		socket.subscribe('/topic/message', (message) => {
			console.log(message);
		});

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

import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setAccessToken } from '../../redux/slices/userSlice';

const RedirectLogin = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const token = searchParams.get('token');
		if (!token) return;
		dispatch(setAccessToken(token));
		navigate('/');
	}, [dispatch, navigate, searchParams]);

	return <div>Redirect....</div>;
};

export default RedirectLogin;

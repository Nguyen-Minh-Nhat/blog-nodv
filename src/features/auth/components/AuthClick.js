import { useDispatch, useSelector } from 'react-redux';
import { setIsCallLogin } from '../../../redux/slices/authSlice';

const AuthClick = ({ children }) => {
	const isAuthenticated = useSelector((state) => !!state.user.data.accessToken);
	const dispatch = useDispatch();
	const handleClick = (e) => {
		if (isAuthenticated) return;
		e.preventDefault();
		e.stopPropagation();
		dispatch(setIsCallLogin(true));
	};

	return (
		<div className="relative" onClick={handleClick}>
			{!isAuthenticated && <div className="absolute h-full w-full"></div>}
			{children}
		</div>
	);
};

export default AuthClick;

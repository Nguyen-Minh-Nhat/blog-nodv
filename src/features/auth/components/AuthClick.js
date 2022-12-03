import { useDispatch, useSelector } from 'react-redux';
import { setIsCallLogin } from '../../../redux/slices/authSlice';

const AuthClick = ({ children }) => {
	const { isLogin } = useSelector((state) => state.user.data);
	const dispatch = useDispatch();
	const handleClick = (e) => {
		if (isLogin) return;
		e.preventDefault();
		e.stopPropagation();
		dispatch(setIsCallLogin(true));
	};

	return (
		<div className="relative" onClick={handleClick}>
			{!isLogin && <div className="absolute h-full w-full"></div>}
			{children}
		</div>
	);
};

export default AuthClick;

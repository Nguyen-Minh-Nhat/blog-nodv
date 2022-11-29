import ShadowWrapper from '../../components/ShadowWrapper';
import Login from '../../features/auth/components/Login';

const LoginPage = () => {
	return (
		<div>
			<div className="position-center absolute">
				<ShadowWrapper>
					<Login />
				</ShadowWrapper>
			</div>
		</div>
	);
};

export default LoginPage;

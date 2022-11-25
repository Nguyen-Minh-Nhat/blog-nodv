import { useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import { Button } from '@mui/material';
import {
	FacebookAuthProvider,
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import {
	FACEBOOK_LOGIN_URL,
	GITHUB_LOGIN_URL,
	GOOGLE_LOGIN_URL,
} from '../../config/socialLink';
import GoogleIcon from '../../assets/icons/google-color-icon';
import { auth } from '../../config/firebaseConfig';
import { setUser } from '../../redux/slices/userSlice';
import CreateAccount from './CreateAccount';

const Login = () => {
	const [isOpenCreateAccount, setIsOpenCreateAccount] = useState(false);
	const [accountInfo, setAccountInfo] = useState(null);
	const socialProvider = useMemo(() => {
		const googleAuthProvider = new GoogleAuthProvider();
		const facebookAuthProvider = new FacebookAuthProvider();
		const githubAuthProvider = new GithubAuthProvider();
		return {
			githubAuthProvider,
			facebookAuthProvider,
			googleAuthProvider,
		};
	}, []);
	const dispatch = useDispatch();

	const handleResponseLogin = (username, email, avatar) => {
		const user = {
			id: 1232,
			username,
			email,
			avatar,
		};

		const isNew = true;

		if (isNew) {
			setIsOpenCreateAccount(true);
			setAccountInfo(user);
			return;
		}

		dispatch(setUser(user));
	};

	const handleGoogleLogin = async () => {
		try {
			const res = await signInWithPopup(
				auth,
				socialProvider.googleAuthProvider
			);
			const { displayName: username, email, photoURL: avatar } = res.user;
			handleResponseLogin(username, email, avatar);
		} catch (error) {
			console.log(error);
		}
	};

	const handleFacebookLogin = async () => {
		try {
			const res = await signInWithPopup(
				auth,
				socialProvider.facebookAuthProvider
			);
			const { displayName: username, email, photoURL } = res.user;
			const credential = FacebookAuthProvider.credentialFromResult(res);
			const token = credential.accessToken;
			let avatar = photoURL + '?height=500&access_token=' + token;
			handleResponseLogin(username, email, avatar);
		} catch (error) {
			console.log(error);
		}
	};

	const handleGithubLogin = async () => {
		try {
			const res = await signInWithPopup(
				auth,
				socialProvider.githubAuthProvider
			);
			const { displayName: username, email, photoURL: avatar } = res.user;
			handleResponseLogin(username, email, avatar);
		} catch (error) {
			console.log(error);
		}
	};

	const handleBackToLogin = () => {
		setIsOpenCreateAccount(false);
	};

	const handleCreateAccount = (data) => {
		dispatch(setUser(data));
	};

	const loginList = useMemo(() => {
		return [
			{
				id: 1,
				icon: <GoogleIcon />,
				text: 'Login with Google',
				handleLogin: handleGoogleLogin,
				url: GOOGLE_LOGIN_URL,
			},
			{
				id: 2,
				icon: <i className="fa-brands fa-facebook-square text-blue-500"></i>,
				text: 'Login with Facebook',
				handleLogin: handleFacebookLogin,
				url: FACEBOOK_LOGIN_URL,
			},
			{
				id: 3,
				icon: <i className="fa-brands fa-github"></i>,
				text: 'Login with Github',
				handleLogin: handleGithubLogin,
				url: GITHUB_LOGIN_URL,
			},
		];
	}, []);

	console.log(FACEBOOK_LOGIN_URL);

	return (
		<div className="relative h-[695px] w-[679px] rounded-xl bg-white p-16">
			{isOpenCreateAccount ? (
				<CreateAccount
					accountInfo={accountInfo}
					setAccountInfo={setAccountInfo}
					onBack={handleBackToLogin}
					onSubmit={handleCreateAccount}
				/>
			) : (
				<div className="flex h-full w-full flex-col items-center justify-center">
					<h2 className="text-2xl text-slate-600">
						Join {process.env.REACT_APP_NAME}
					</h2>
					<div className="my-10">
						<div className="flex flex-col gap-4">
							{loginList.map((item) => (
								<Button
									href={item.url}
									key={item.id}
									variant="contained"
									color="inherit"
									className="btn rounded-full"
									startIcon={item.icon}
								>
									<span className="normal-case">{item.text}</span>
								</Button>
							))}
						</div>
					</div>
					<div className="pb-24">
						<span>Already have an account? Sign in</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Login;

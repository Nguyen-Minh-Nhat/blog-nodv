import React from 'react';
import SocialLogin from './SocialLogin';

const Login = () => {
	return (
		<div className="relative flex h-[695px] w-[600px] flex-col items-center justify-center rounded-xl bg-white p-16">
			<h2 className="text-center text-3xl">
				Join <span className="underline decoration-green-600">NODV</span>
			</h2>

			<div className="my-16 flex flex-col items-center justify-center">
				<SocialLogin />
				<div className="mt-10">
					Already have an account?{' '}
					<a className="font-bold text-green-600" href="/#">
						Sign in
					</a>
				</div>
			</div>
			<div className="text-center text-sm opacity-75">
				Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge
				that Medium’s Privacy Policy applies to you.
			</div>
		</div>
	);
};

export default Login;

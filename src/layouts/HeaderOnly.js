import { Button } from '@mui/material';
import Logo from './components/Logo';
import ReactStickyBox from 'react-sticky-box';
import TriggerLogin from '../features/auth/components/TriggerLogin';
import clsx from 'clsx';
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

const HeaderContext = createContext({ setIsPrimary: () => {} });

export const useHeader = () => useContext(HeaderContext);

const HeaderOnlyLayout = ({ children }) => {
	const [isPrimary, setIsPrimary] = useState(true);
	return (
		<div className="flex flex-col ">
			<ReactStickyBox
				className={clsx(
					'z-10 flex w-full justify-center border-b border-black transition duration-500',
					isPrimary ? 'bg-[#ffc017]' : 'bg-white',
				)}
			>
				<div className="w-[1192px] max-w-full px-4">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center justify-center gap-2">
							<div className="w-20">
								<Logo />
							</div>
						</div>
						<TriggerLogin>
							<Button
								variant="contained"
								color="inherit"
								className={clsx(
									'btn rounded-full normal-case text-white',
									isPrimary ? 'bg-black' : 'bg-green-700',
								)}
							>
								Get Started
							</Button>
						</TriggerLogin>
					</div>
				</div>
			</ReactStickyBox>
			<div className="flex flex-col">
				<HeaderContext.Provider
					value={{
						setIsPrimary,
					}}
				>
					{children}
				</HeaderContext.Provider>
			</div>
		</div>
	);
};

export default HeaderOnlyLayout;

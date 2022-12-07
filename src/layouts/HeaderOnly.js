import ReactStickyBox from 'react-sticky-box';
import Header from './components/Header';

const HeaderOnlyLayout = ({ children }) => {
	return (
		<div className="flex flex-col">
			<ReactStickyBox className="z-10 flex w-full justify-center border-b bg-white">
				<div className="mx-16 w-[1192px] max-w-full">
					<Header />
				</div>
			</ReactStickyBox>
			<div className="flex flex-col">{children}</div>
		</div>
	);
};

export default HeaderOnlyLayout;

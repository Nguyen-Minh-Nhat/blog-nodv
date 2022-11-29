import Header from './components/Header';

const HeaderOnlyLayout = ({ children }) => {
	return (
		<div className="flex flex-col">
			<Header />
			<div className="px-16">{children}</div>
		</div>
	);
};

export default HeaderOnlyLayout;

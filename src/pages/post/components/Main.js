const Main = ({ children }) => {
	return (
		<div className="relative flex-1 overflow-y-auto">
			<div className="mx-auto h-full w-[700px] max-w-full">{children}</div>
		</div>
	);
};

export default Main;

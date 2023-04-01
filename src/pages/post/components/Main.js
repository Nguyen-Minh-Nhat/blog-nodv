const Main = ({ children }) => {
	return (
		<div className="relative">
			<div className="mx-auto h-full w-[700px] max-w-full">
				{children}
			</div>
		</div>
	);
};

export default Main;

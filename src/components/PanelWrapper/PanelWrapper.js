const PanelWrapper = ({ title, children }) => {
	return (
		<div className="mt-10">
			<h2 className="m-0 mb-5 block text-base font-medium leading-5">
				{title}
			</h2>
			{children}
		</div>
	);
};

export default PanelWrapper;

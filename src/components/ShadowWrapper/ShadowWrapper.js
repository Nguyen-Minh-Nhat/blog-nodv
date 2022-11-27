const ShadowWrapper = ({ children }) => {
	return (
		<div className="overflow-hidden rounded-lg shadow-[0_2px_10px_0_rgba(0,0,0,0.15)]">
			{children}
		</div>
	);
};

export default ShadowWrapper;

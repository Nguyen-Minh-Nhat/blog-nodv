const Header = ({ children }) => {
	return (
		<div className="bg-wite border-b bg-white py-4">
			<div className="bg-blue mx-auto flex w-[650px] items-center justify-between">
				<span className="text-2xl font-bold text-slate-600">
					Write your new post <i className="fa-solid fa-feather"></i>
				</span>
				{children}
			</div>
		</div>
	);
};

export default Header;

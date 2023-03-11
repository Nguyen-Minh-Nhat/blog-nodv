export const MainContentLayout = ({ children }) => {
	return (
		<div className="mx-auto flex max-w-[740px] flex-col px-5">
			{children}
		</div>
	);
};

const Header = ({ children }) => {
	return <div className="my-10 bg-white font-[lora]">{children}</div>;
};

const Title = ({ children }) => {
	return <h2 className="mb-4 text-5xl text-[#292929]">{children}</h2>;
};

const Body = ({ children }) => {
	return <div>{children}</div>;
};
MainContentLayout.Header = Header;
MainContentLayout.Title = Title;
MainContentLayout.Body = Body;

MainContentLayout.propTypes = {};

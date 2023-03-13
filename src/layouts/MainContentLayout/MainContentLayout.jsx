import clsx from 'clsx';

export const MainContentLayout = ({ children }) => {
	return (
		<div className="mx-auto flex max-w-[700px] flex-col px-[10px]">
			{children}
		</div>
	);
};

const Header = ({ className, children }) => {
	return (
		<div className={clsx('my-10 bg-white font-[lora]', className)}>
			{children}
		</div>
	);
};

const Title = ({ children, className }) => {
	return (
		<h2
			className={clsx(
				'mb-4 text-5xl font-bold text-[#292929]',
				className,
			)}
		>
			{children}
		</h2>
	);
};

const Body = ({ children }) => {
	return <div>{children}</div>;
};
MainContentLayout.Header = Header;
MainContentLayout.Title = Title;
MainContentLayout.Body = Body;

MainContentLayout.propTypes = {};

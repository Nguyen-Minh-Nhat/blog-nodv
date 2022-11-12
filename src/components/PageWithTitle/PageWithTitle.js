import Tab from '../Tab';

const PageWithTitle = ({
	title = 'Title',
	tabItems,
	children,
	rightComponent,
}) => {
	return (
		<div className="h-screen">
			<header className="mt-12  flex justify-center">
				<div className="mx-4 basis-[700px]">
					<div className="mb-10 flex items-center justify-between">
						<h2 className="text-5xl font-bold text-[#292929]">{title}</h2>
						{rightComponent}
					</div>
					{tabItems && <Tab tabItems={tabItems} />}
				</div>
			</header>
			<main className="flex h-full justify-center overflow-y-auto pt-7">
				<div className="mx-4 basis-[700px]">{children}</div>
			</main>
		</div>
	);
};

export default PageWithTitle;

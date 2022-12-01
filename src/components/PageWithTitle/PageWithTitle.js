import ReactStickyBox from 'react-sticky-box';
import Tab from '../Tab';

const PageWithTitle = ({
	title = 'Title',
	tabItems,
	children,
	rightComponent,
	onTabChange,
}) => {
	return (
		<div className="flex flex-col">
			<ReactStickyBox offsetTop={0} className="z-10">
				<header className="flex justify-center bg-white pt-12">
					<div className="mx-4 basis-[700px]">
						<div className="mb-10 flex items-center justify-between">
							<h2 className="text-5xl font-bold text-[#292929]">{title}</h2>
							{rightComponent}
						</div>
						{tabItems ? (
							<Tab tabItems={tabItems} onChange={onTabChange} />
						) : (
							<div className="border-b"></div>
						)}
					</div>
				</header>
			</ReactStickyBox>
			<main className="flex flex-1 justify-center pt-7">
				<div className="mx-4 basis-[700px]">{children}</div>
			</main>
		</div>
	);
};

export default PageWithTitle;

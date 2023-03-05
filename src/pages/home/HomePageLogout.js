import Hero from './components/Hero';
import LogoutPostList from './components/LogoutPostList';
import LogoutTopics from './components/LogoutTopics';
import PostTrending from '../../features/post/components/PostTrending/PostTrending';
import ReactStickyBox from 'react-sticky-box';

const HomePageLogout = () => {
	return (
		<>
			<SectionWrapper className={'bg-[#ffc017]'}>
				<Hero />
			</SectionWrapper>
			<SectionWrapper>
				<PostTrending />
			</SectionWrapper>
			<SectionWrapper>
				<div className="flex w-full flex-col items-start gap-20 lg:flex-row-reverse">
					<ReactStickyBox
						className="relative top-0 lg:sticky lg:top-16"
						offsetTop={64}
					>
						<LogoutTopics />
					</ReactStickyBox>
					<LogoutPostList />
				</div>
			</SectionWrapper>
		</>
	);
};
const SectionWrapper = ({ children, className, ...props }) => {
	return (
		<div className={`flex justify-center border-b ${className}`} {...props}>
			<div className="mx-4 w-[1192px] max-w-full py-4 md:mx-16 lg:py-12">
				{children}
			</div>
		</div>
	);
};

export default HomePageLogout;

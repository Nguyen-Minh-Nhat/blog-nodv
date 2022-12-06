import ReactStickyBox from 'react-sticky-box';
import PostTrending from '../../features/post/components/PostTrending/PostTrending';
import Hero from './components/Hero';
import LogoutPostList from './components/LogoutPostList';
import LogoutTopics from './components/LogoutTopics';

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
				<div className="-mt-8 flex w-full items-start gap-20">
					<LogoutPostList />
					<ReactStickyBox offsetTop={64}>
						<LogoutTopics />
					</ReactStickyBox>
				</div>
			</SectionWrapper>
		</>
	);
};
const SectionWrapper = ({ children, className, ...props }) => {
	return (
		<div className={`flex justify-center border-b ${className}`} {...props}>
			<div className="mx-16 w-[1192px] max-w-full py-12">{children}</div>
		</div>
	);
};

export default HomePageLogout;

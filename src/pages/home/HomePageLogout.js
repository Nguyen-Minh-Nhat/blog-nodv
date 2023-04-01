import { Hero } from './components';
import LogoutPostList from './components/LogoutPostList';
import LogoutTopics from './components/LogoutTopics';
import PostTrending from '../../features/post/components/PostTrending/PostTrending';
import ReactStickyBox from 'react-sticky-box';
import { useEffect } from 'react';
import { useHeader } from '../../layouts/HeaderOnly';
import { useOnScreen } from '../../hooks';
import { useRef } from 'react';

const HomePageLogout = () => {
	const heroRef = useRef(null);
	const isVisible = useOnScreen(heroRef);

	const { setIsPrimary } = useHeader();

	useEffect(() => {
		setIsPrimary(isVisible);
	}, [isVisible]);

	return (
		<>
			<SectionWrapper className="bg-[#ffc017]">
				<Hero ref={heroRef} />
			</SectionWrapper>
			<SectionWrapper>
				<PostTrending />
			</SectionWrapper>
			<SectionWrapper>
				<div className="flex w-full flex-col-reverse items-start gap-20 lg:flex-row">
					<LogoutPostList />
					<ReactStickyBox
						className="relative top-0 lg:sticky lg:top-16"
						offsetTop={64}
					>
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
			<div className="w-[1192px] max-w-full px-4 py-4 md:mx-16 lg:py-12">
				{children}
			</div>
		</div>
	);
};

export default HomePageLogout;

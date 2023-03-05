import { Avatar } from '@mui/material';
import IconWrapper from '../../../../components/IconWrapper';
import { TrendingIcon } from '../../../../components/Icons';
import { getPostsTrending } from '../../../../api/postApi';
import { intlFormatDistance } from 'date-fns';
import { useQuery } from 'react-query';

const PostTrending = () => {
	const { data: posts, isSuccess } = useQuery('postsTrending', () =>
		getPostsTrending(),
	);
	return (
		<>
			<div className="mb-4 flex gap-2">
				<IconWrapper>
					<TrendingIcon />
				</IconWrapper>
				<h4 className="text-sm font-bold">Trending on Blog NODV</h4>
			</div>
			<div className="grid grid-cols-3 gap-x-4 gap-y-4">
				{isSuccess &&
					posts.map((post, index) => (
						<div key={index} className="flex pb-4">
							<div className="mr-4 text-3xl font-bold text-gray-700 opacity-40">
								0{index + 1}
							</div>
							<div className="mt-2 flex flex-col gap-2">
								<div key={post.id}>
									<div className="flex items-center gap-2">
										<Avatar
											className="h-6 w-6"
											src={post.user.avatar}
										/>
										<span className="text-[13px] font-bold">
											{post.user.username}
										</span>
									</div>
									<h4 className="mt-2 font-bold capitalize">
										{post.title}
									</h4>
								</div>
								<div className="text-[13px] opacity-75">
									<span>
										{intlFormatDistance(
											new Date(post.createdDate),
											new Date(),
										)}
									</span>
									<span className="mx-1">.</span>{' '}
									<span>{post.timeRead} min</span>
								</div>
							</div>
						</div>
					))}
			</div>
		</>
	);
};

export default PostTrending;

import PageWithTitle from '../../components/PageWithTitle';
import { PostList } from '../../features/post';
import { useSelector } from 'react-redux';

const BookmarkPage = () => {
	const bookmark = useSelector((state) => state.bookmark);
	return (
		<PageWithTitle title="Bookmark">
			<div>
				<div className="flex justify-center">
					<div className="mx-4 max-w-[700px] basis-[700px]">
						<PostList
							postList={bookmark?.posts}
							postIdsBookmark={bookmark?.postIds}
							// onHidePost={hidePostMutation.mutate}
						/>
					</div>
				</div>
			</div>
		</PageWithTitle>
	);
};

export default BookmarkPage;

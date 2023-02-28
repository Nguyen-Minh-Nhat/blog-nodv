import { useSelector } from 'react-redux';
import PageWithTitle from '../../components/PageWithTitle';
import { PostList } from '../../features/post';

const BookmarkPage = () => {
	// const bookmark = queryClient.getQueryData("bookmark");
	const bookmark = useSelector((state) => state.bookmark);

	// useQuery(["bookmark"], getBookmarkByUserId, {
	//   onSuccess: (data) => {
	//     console.log("bookmakr page ", data);
	//     // if (!bookmark.postIds.length) {
	//     dispatch(setBookmark(data));
	//     // }
	//   },
	// });

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

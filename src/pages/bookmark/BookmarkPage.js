import { Divider } from '@mui/material';
import { MainContentLayout } from '../../layouts';
import { PostList } from '../../features/post';
import { useSelector } from 'react-redux';

const BookmarkPage = () => {
	const bookmark = useSelector((state) => state.bookmark);
	return (
		<MainContentLayout>
			<MainContentLayout.Header>
				<MainContentLayout.Title>Bookmark</MainContentLayout.Title>
				<Divider />
			</MainContentLayout.Header>
			<MainContentLayout.Body>
				<PostList
					postList={bookmark?.posts}
					postIdsBookmark={bookmark?.postIds}
					// onHidePost={hidePostMutation.mutate}
				/>
			</MainContentLayout.Body>
		</MainContentLayout>
	);
};

export default BookmarkPage;

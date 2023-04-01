import { Divider } from '@mui/material';
import { MainContentLayout } from '../../layouts';
import { PostListFetch } from '../../features/post/components';
import { getBookmark } from '../../api/bookmarkApi';

const BookmarkPage = () => {
	return (
		<MainContentLayout>
			<MainContentLayout.Header>
				<MainContentLayout.Title>Bookmark</MainContentLayout.Title>
				<Divider />
			</MainContentLayout.Header>
			<MainContentLayout.Body>
				<PostListFetch
					queryKey="bookmark"
					queryFn={getBookmark}
					isDeleteOnBookmark
				/>
			</MainContentLayout.Body>
		</MainContentLayout>
	);
};

export default BookmarkPage;

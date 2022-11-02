import PageWithTitle from '../../components/PageWithTitle';
import { BookmarkStackList } from '../../features/bookmark';

const BookmarkPage = () => {
	const bookmarkStackList = [
		{
			name: 'new 1',
			numPosts: 4,
			thumbnails: [],
		},
	];

	return (
		<PageWithTitle title="Bookmark" tabItems={[{ id: 1, title: 'Saved' }]}>
			<div>
				<BookmarkStackList />
			</div>
		</PageWithTitle>
	);
};

export default BookmarkPage;

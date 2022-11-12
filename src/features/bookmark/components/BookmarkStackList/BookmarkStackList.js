import BookmarkStack from '../BookmarkStack';

const BookmarkStackList = ({ bookmarkStackList }) => {
	return (
		<div className="flex flex-col gap-6">
			{bookmarkStackList.map((bookmarkStack) => (
				<BookmarkStack key={bookmarkStack.id} bookmarkStack={bookmarkStack} />
			))}
		</div>
	);
};

export default BookmarkStackList;
